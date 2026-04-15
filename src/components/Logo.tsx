import Image from "next/image";

export function Logo({ variant = "full" }: { variant?: "full" | "icon" }) {
  if (variant === "icon") {
    return (
      <div className="flex items-center justify-center rounded-[var(--radius-xl)] border border-white/30 bg-[var(--color-brand)] p-[10px]">
        <Image
          src="/assets/logo-symbol.svg"
          alt="Handingoff"
          width={28}
          height={28}
        />
      </div>
    );
  }

  return (
    <Image
      src="/assets/logo-full.svg"
      alt="Handingoff"
      width={122}
      height={20}
    />
  );
}
