"use client";

import { useState } from "react";
import Image from "next/image";
import { Logo } from "./Logo";

export function SectionWhatAISees() {
  const [dimmed, setDimmed] = useState(false);

  return (
    <section
      id="what-ai-sees"
      className="relative flex w-full flex-col items-center justify-center px-[var(--space-lg)] py-[80px]"
      style={{
        backgroundImage: [
          "radial-gradient(circle, rgba(255,255,255,0.05) 2px, transparent 2px)",
          "radial-gradient(circle, rgba(255,255,255,0.05) 2px, transparent 2px)",
        ].join(", "),
        backgroundSize: "8px 4.6px",
        backgroundPosition: "0 0, 4px 2.3px",
      }}
    >
      {/* Dimming overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{ background: "rgba(0,0,0,0.4)", opacity: dimmed ? 1 : 0 }}
      />

      <div className="relative flex w-full max-w-[800px] flex-col items-center gap-[75px]">
        {/* Section header */}
        <div className="flex w-full flex-col items-start gap-[16px]">
          <p className="font-mono text-[12px] font-medium leading-[1.5] text-[var(--color-text-secondary)]">
            How it works
          </p>
          <h2 className="font-heading text-[44px] font-[620] leading-[1.1] tracking-[-0.3px] text-white">
            What the AI sees
          </h2>
          <p className="font-body text-[14px] font-[620] leading-[1.4] text-[var(--color-text-secondary)]">
            Single url. Structured markdown. Only what the agent needs
          </p>
        </div>

        {/* Example UI window */}
        <div
          className="flex w-full flex-col items-start overflow-hidden rounded-[20px] border border-[var(--color-border-default)] bg-[var(--color-surface-secondary)] backdrop-blur-[24px]"
          onMouseEnter={() => setDimmed(true)}
          onMouseLeave={() => setDimmed(false)}
        >
          {/* Window header */}
          <div className="flex w-full items-center gap-[12px] border-b border-[var(--color-border-default)] px-[16px] py-[12px]">
            <Image
              src="/assets/window-dots.svg"
              alt=""
              width={32}
              height={8}
            />
            <span className="font-mono text-[12px] font-medium leading-[1.5] text-[var(--color-text-muted)]">
              handingoff.com/c/abc123
            </span>
          </div>

          {/* Code content */}
          <div className="flex w-full items-center justify-center py-[64px]">
            <pre className="w-[480px] max-w-full px-[var(--space-lg)] font-mono text-[12px] font-medium leading-[1.5] text-[var(--color-text-muted)] whitespace-pre-wrap">
              <span className="text-white">{"# Screen Capture — Checkout Page"}</span>
              {"\n\n"}
              <span>{"**URL:** "}</span>
              <span style={{ color: "var(--color-feedback-info)" }}>{"https://app.example.com/checkout"}</span>
              {"\n"}
              <span>{"**Duration:** 34s"}</span>
              {"\n"}
              <span>{"**Captured:** 2026-03-13 14:32:07 UTC"}</span>
              {"\n\n"}
              <span className="text-white">{"## What Happened"}</span>
              {"\n"}
              <span>{"User navigated to checkout, filled in shipping"}</span>
              {"\n"}
              <span>{"details, clicked \"Place Order.\" Request failed"}</span>
              {"\n"}
              <span>{"with a 422 — server rejected the payload."}</span>
              {"\n\n"}
              <span className="text-white">{"## Network Requests"}</span>
              {"\n"}
              <span>{"POST /api/orders → "}</span>
              <span style={{ color: "var(--color-feedback-error)" }}>{"422"}</span>
              <span>{" (18ms)"}</span>
              {"\n"}
              <span>{"  Request:  { \"items\": [...], \"shipping\": null }"}</span>
              {"\n"}
              <span>{"  Response: { \"error\": \"shipping address required\" }"}</span>
              {"\n\n"}
              <span>{"GET /api/cart → "}</span>
              <span style={{ color: "var(--color-feedback-success)" }}>{"200"}</span>
              <span>{" (4ms)"}</span>
              {"\n\n"}
              <span className="text-white">{"## Console Output"}</span>
              {"\n"}
              <span style={{ color: "var(--color-feedback-error)" }}>{"[error]"}</span>
              <span>{" Unhandled rejection: shipping address required"}</span>
              {"\n"}
              <span style={{ color: "var(--color-feedback-warning)" }}>{"[warn]"}</span>
              <span>{"  Form submitted without validation"}</span>
            </pre>
          </div>
        </div>

        {/* Integrations */}
        <div className="flex w-full self-start flex-col items-start gap-[22px] sm:w-1/2">
          <div className="flex items-center gap-[8px]">
            <Logo variant="icon" />
            {[
              { src: "/assets/logo-chatgpt.svg", alt: "ChatGPT" },
              { src: "/assets/logo-claude.svg", alt: "Claude" },
              { src: "/assets/logo-cursor.svg", alt: "Cursor" },
              { src: "/assets/logo-github.svg", alt: "GitHub Copilot" },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="size-[48px] shrink-0 overflow-hidden rounded-[16px]"
                style={{ backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}
              >
                <Image src={src} alt={alt} width={48} height={48} />
              </div>
            ))}
          </div>
          <p className="font-heading text-[28px] font-[620] leading-[1.1] tracking-[-0.3px] text-white">
            Works with ChatGPT, Claude, Cursor, Copilot, or any AI that can
            fetch a URL.
          </p>
        </div>
      </div>
    </section>
  );
}
