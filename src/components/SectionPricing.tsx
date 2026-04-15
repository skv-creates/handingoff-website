import { SeparatorHorizontal } from "./SeparatorHorizontal";
import { SeparatorVertical } from "./SeparatorVertical";

const features = [
  "10 minutes free to start",
  "No recording length limits",
  "Minutes never expire",
  "Buy 60 min packs ($6)",
  "AI-ready markdown output",
  "Capture history persists",
];

export function SectionPricing() {
  return (
    <section
      id="pricing"
      className="flex w-full items-stretch justify-center"
    >
      {/* Left decorative lines */}
      <div className="hidden flex-col items-center justify-between lg:flex lg:flex-1">
        <div className="h-px w-full bg-white/[0.12]" />
        <div className="h-px w-full bg-white/[0.12]" />
      </div>

      {/* Center content */}
      <div className="flex w-full max-w-[800px] shrink-0 flex-col items-center">
        <SeparatorHorizontal />

        <div className="flex w-full items-stretch py-[3px]">
          <SeparatorVertical />

          <div className="flex flex-1 flex-col items-center py-[80px]">
            {/* Pricing header */}
            <div className="flex w-full max-w-[480px] flex-col gap-[16px] px-[var(--space-lg)]">
              <h2 className="font-heading text-[44px] font-[620] leading-[1.1] tracking-[-0.3px] text-white">
                Simple pricing
              </h2>
              <p className="font-body text-[14px] font-[620] leading-[1.4] text-[var(--color-text-secondary)]">
                Get 10 minutes for free. Buy more when you need it
              </p>
            </div>

            {/* Pricing card */}
            <div className="mt-[80px] flex w-full max-w-[480px] flex-col gap-[64px] rounded-[20px] border border-white/20 bg-[var(--color-surface-secondary)] px-[24px] pb-[22px] pt-[32px]">
              {/* Card header */}
              <div className="flex items-end justify-between border-b border-white/40 pb-[32px]">
                <h3 className="font-heading text-[30px] font-[620] leading-[1.1] tracking-[-0.3px] text-white">
                  Pay as you go.
                  <br />
                  No subscription.
                </h3>
                <div className="flex items-end gap-[4px] pb-[5px]">
                  <span
                    className="font-body text-[24px] font-semibold leading-[1.1] tracking-[-2.16px] text-white"
                    style={{ fontFeatureSettings: "'lnum' 1, 'tnum' 1" }}
                  >
                    $ 0.10
                  </span>
                  <span className="font-body text-[12px] font-semibold leading-[1.1] text-white/40">
                    /min
                  </span>
                </div>
              </div>

              {/* Feature list */}
              <div className="flex flex-col gap-[8px]">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-[20px]">
                    <span className="text-[15px] font-semibold tracking-[-0.15px] text-white/30">
                      ✓
                    </span>
                    <span className="font-body text-[14px] font-[620] leading-[1.4] text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <a
                href="#download"
                className="flex h-[44px] w-full items-center justify-center rounded-[var(--radius-full)] border border-white/30 bg-[var(--color-brand)] px-[var(--space-xl)] py-[var(--space-md)] font-body text-[12px] font-[510] leading-[1.4] tracking-[0.05px] text-white transition-opacity hover:opacity-90"
              >
                Get started
              </a>
            </div>
          </div>

          <SeparatorVertical />
        </div>

        <SeparatorHorizontal />
      </div>

      {/* Right decorative lines */}
      <div className="hidden flex-col items-center justify-between lg:flex lg:flex-1">
        <div className="h-px w-full bg-white/[0.12]" />
        <div className="h-px w-full bg-white/[0.12]" />
      </div>
    </section>
  );
}
