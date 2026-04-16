"use client";

import { useEffect, useRef, useState } from "react";

// Heights match the Figma design (symmetric, tallest in center)
const BAR_HEIGHTS = [9, 13, 16, 13, 9];

// Weighted random scale — favors mid-range, mimics speech amplitude distribution
function randomScale() {
  const r = Math.random();
  if (r < 0.15) return 0.2 + Math.random() * 0.1;  // quiet pause between words
  if (r < 0.75) return 0.35 + Math.random() * 0.4;  // normal pronunciation
  return 0.7 + Math.random() * 0.25;                 // stressed syllable
}

// Variable delay — mix of quick syllables and slower ones
function randomDelay() {
  const r = Math.random();
  if (r < 0.35) return 80  + Math.random() * 100; // short word / quick syllable
  if (r < 0.75) return 200 + Math.random() * 200; // normal word
  return 420 + Math.random() * 200;               // longer word / pause
}

export function CustomCursor({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState(false);

  // Mouse tracking — direct DOM mutation to avoid re-renders per frame
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [containerRef]);

  // Speech-like animation loop — each bar runs its own independent timer
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const animateBar = (i: number) => {
      const bar = barRefs.current[i];
      if (bar) {
        bar.style.transform = `scaleY(${randomScale()})`;
      }
      timers[i] = setTimeout(() => animateBar(i), randomDelay());
    };

    // Stagger bar starts so they don't all kick off together
    BAR_HEIGHTS.forEach((_, i) => {
      timers[i] = setTimeout(() => animateBar(i), i * 70 + Math.random() * 80);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s",
        willChange: "transform",
      }}
    >
      {/* Arrow */}
      <div style={{ width: 23, height: 25, transform: "rotate(-45deg)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/cursor-arrow.svg" alt="" width={23} height={25} />
      </div>

      {/* Voice wave badge */}
      <div style={{ position: "absolute", left: 18, top: 18, width: 27, height: 27 }}>
        {/* White circle */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/cursor-circle.svg"
          alt=""
          width={27}
          height={27}
          style={{ position: "absolute", inset: 0 }}
        />
        {/* Bars */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {BAR_HEIGHTS.map((h, i) => (
            <div
              key={i}
              ref={(el) => { barRefs.current[i] = el; }}
              style={{
                width: 2,
                height: h,
                backgroundColor: "var(--color-brand)",
                borderRadius: 9999,
                transformOrigin: "center",
                transform: "scaleY(0.3)",
                transition: "transform 110ms ease-out",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
