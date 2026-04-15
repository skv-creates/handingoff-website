import { Logo } from "./Logo";

export function SectionHero() {
  return (
    <section className="relative flex min-h-[800px] w-full flex-col items-center justify-center overflow-hidden px-[var(--space-lg)]">
      {/* Texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          maskImage: "url('/assets/texture.svg')",
          WebkitMaskImage: "url('/assets/texture.svg')",
          maskSize: "cover",
          WebkitMaskSize: "cover",
        }}
      />

      <div className="flex w-full max-w-[800px] flex-col items-start gap-[48px]">
        <div className="flex w-full flex-col items-start gap-[24px]">
          <p className="font-mono text-[12px] font-medium leading-[1.5] text-[var(--color-text-secondary)]">
            ✦ Apple Silicon ready
          </p>

          <h1 className="font-heading text-[64px] font-bold leading-[1.1] tracking-[-0.3px] text-white">
            Talk to your screen.
            <br />
            Hand off to your AI.
          </h1>

          <p className="font-body text-[18px] font-[620] leading-[1.5] text-[var(--color-text-secondary)]">
            Screen recordings transcribed into structured context — video,
            network requests, console logs — ready for any AI agent.
          </p>
        </div>

        <a
          href="#download"
          className="flex items-center gap-[16px] rounded-[var(--radius-2xl)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-secondary)] py-[var(--space-sm)] pl-[var(--space-lg)] pr-[var(--space-md)] backdrop-blur-[8px] transition-colors hover:bg-[var(--color-surface)]"
        >
          <span className="font-body text-[12px] font-[510] leading-[1.4] tracking-[0.05px] text-white">
            Download for Mac
          </span>
          <Logo variant="icon" />
        </a>
      </div>
    </section>
  );
}
