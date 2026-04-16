"use client";

import { useEffect, useRef, useState } from "react";

const BAR_HEIGHTS = [9, 13, 16, 13, 9];

function randomScale() {
  const r = Math.random();
  if (r < 0.15) return 0.2 + Math.random() * 0.1;
  if (r < 0.75) return 0.35 + Math.random() * 0.4;
  return 0.7 + Math.random() * 0.25;
}

function randomDelay() {
  const r = Math.random();
  if (r < 0.35) return 80  + Math.random() * 100;
  if (r < 0.75) return 200 + Math.random() * 200;
  return 420 + Math.random() * 200;
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState(false);

  // Mouse tracking — document-level, direct DOM mutation to avoid per-frame re-renders
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  // Speech-like animation — pauses when hovering interactive elements
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    let isPaused = false;

    const animateBar = (i: number) => {
      if (isPaused) return;
      const bar = barRefs.current[i];
      if (bar) bar.style.transform = `scaleY(${randomScale()})`;
      timers[i] = setTimeout(() => animateBar(i), randomDelay());
    };

    const pause = () => {
      isPaused = true;
      timers.forEach(clearTimeout);
      barRefs.current.forEach((bar) => {
        if (bar) bar.style.transform = "scaleY(0.3)";
      });
    };

    const resume = () => {
      isPaused = false;
      BAR_HEIGHTS.forEach((_, i) => {
        timers[i] = setTimeout(() => animateBar(i), i * 50 + Math.random() * 60);
      });
    };

    // Start
    BAR_HEIGHTS.forEach((_, i) => {
      timers[i] = setTimeout(() => animateBar(i), i * 70 + Math.random() * 80);
    });

    // Pause on links/buttons, resume when leaving them
    const onOver = (e: MouseEvent) => {
      const isInteractive = !!(e.target as Element).closest(
        'a, button, [role="button"], input, textarea, select, label'
      );
      if (isInteractive && !isPaused) pause();
      else if (!isInteractive && isPaused) resume();
    };

    document.addEventListener("mouseover", onOver);

    return () => {
      timers.forEach(clearTimeout);
      document.removeEventListener("mouseover", onOver);
    };
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/cursor-circle.svg"
          alt=""
          width={27}
          height={27}
          style={{ position: "absolute", inset: 0 }}
        />
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
