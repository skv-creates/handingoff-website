import { Logo } from "./Logo";

export function Navigation() {
  return (
    <nav className="fixed left-1/2 top-[25px] z-50 flex w-[800px] max-w-[calc(100%-32px)] -translate-x-1/2 items-center justify-between rounded-[var(--radius-full)] border border-[var(--color-border-default)] bg-[var(--color-surface)] py-[12px] pl-[24px] pr-[12px] backdrop-blur-[12px]">
      <Logo />

      <div className="flex items-center gap-[24px]">
        <a
          href="#how-it-works"
          className="font-body text-[12px] font-[510] leading-[1.4] tracking-[0.05px] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
        >
          How it works
        </a>
        <a
          href="#pricing"
          className="font-body text-[12px] font-[510] leading-[1.4] tracking-[0.05px] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
        >
          Pricing
        </a>
      </div>

      <a
        href="#download"
        className="flex h-[36px] items-center justify-center rounded-[var(--radius-full)] border border-white/30 bg-[var(--color-brand)] px-[var(--space-lg)] py-[var(--space-md)] font-body text-[12px] font-[510] leading-[1.4] tracking-[0.05px] text-white transition-opacity hover:opacity-90"
      >
        Download for Mac
      </a>
    </nav>
  );
}
