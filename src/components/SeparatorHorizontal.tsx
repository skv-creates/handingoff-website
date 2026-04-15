export function SeparatorHorizontal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-px w-full max-w-[800px] items-center gap-[3px] ${className}`}
    >
      <div className="size-[3px] shrink-0 rounded-full bg-white/[0.12]" />
      <div className="h-px min-w-px flex-1 bg-white/[0.12]" />
      <div className="size-[3px] shrink-0 rounded-full bg-white/[0.12]" />
    </div>
  );
}
