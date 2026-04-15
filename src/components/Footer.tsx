import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center px-[var(--space-lg)] py-[80px]">
      <div className="flex h-[80px] w-full max-w-[800px] items-center justify-between">
        <div className="flex h-full flex-col items-start justify-between">
          <Logo />
          <p className="font-mono text-[12px] font-medium leading-[1.5] text-[var(--color-text-muted)]">
            Screen recordings for AI.
          </p>
        </div>

        <div className="flex h-full flex-col items-end justify-end gap-[12px]">
          <a
            href="mailto:hello@handingoff.com"
            className="font-mono text-[12px] font-medium leading-[1.5] text-[var(--color-text-muted)] underline transition-colors hover:text-[var(--color-text-secondary)]"
          >
            Email
          </a>
          <p className="font-mono text-[12px] font-medium leading-[1.5] text-[var(--color-text-muted)]">
            © 2026 HandingOff. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
