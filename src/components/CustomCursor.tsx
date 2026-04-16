"use client";

import { useEffect, useRef, useState } from "react";

const BARS: { height: number; duration: string; delay: string }[] = [
  { height: 9,  duration: "0.65s", delay: "0ms"   },
  { height: 13, duration: "0.80s", delay: "150ms"  },
  { height: 16, duration: "0.70s", delay: "75ms"   },
  { height: 13, duration: "0.85s", delay: "225ms"  },
  { height: 9,  duration: "0.60s", delay: "350ms"  },
];

export function CustomCursor({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      <div style={{ width: 27, height: 29, transform: "rotate(-45deg)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/cursor-arrow.svg" alt="" width={27} height={29} />
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
          {BARS.map((bar, i) => (
            <div
              key={i}
              style={{
                width: 2,
                height: bar.height,
                backgroundColor: "var(--color-brand)",
                borderRadius: 9999,
                transformOrigin: "center",
                animation: `voice-bar ${bar.duration} ease-in-out infinite`,
                animationDelay: bar.delay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
