export function SectionHowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Record",
      description:
        "Hit record from the menubar. Captures screen, network requests, and console.",
    },
    {
      number: "02",
      title: "Process",
      description:
        "AI transcribes your recording — video, network, and console — into structured markdown.",
    },
    {
      number: "03",
      title: "Share",
      description:
        "Get a URL. Paste it in any AI chat. The agent sees exactly what you saw.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="flex w-full flex-col items-center justify-center px-[var(--space-lg)] py-[80px]"
    >
      <div className="flex w-full max-w-[800px] flex-col gap-[75px]">
        <h2 className="font-heading text-[44px] font-[620] leading-[1.1] tracking-[-0.3px] text-white">
          Install and go
        </h2>

        {/* Steps — each column holds its own badge + text, connector is absolutely positioned */}
        <div className="flex w-full flex-col gap-[32px] sm:flex-row sm:gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative flex flex-1 flex-col gap-[29px] ${
                i < steps.length - 1 ? "sm:pr-[28px]" : ""
              }`}
            >
              {/* Badge */}
              <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[var(--space-sm)] bg-[var(--color-surface)]">
                <span className="font-mono text-[12px] font-medium leading-[1.5] text-[var(--color-text-secondary)]">
                  {step.number}
                </span>
              </div>

              {/* Connector — spans from badge right-edge to next column left-edge */}
              {i < steps.length - 1 && (
                <div
                  className="absolute hidden h-px bg-[var(--color-border-subtle)] sm:block"
                  style={{ top: 16, left: 40, right: 8 }}
                />
              )}

              {/* Text */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="font-heading text-[28px] font-[620] leading-[1.1] tracking-[-0.3px] text-white">
                  {step.title}
                </h3>
                <p className="font-body text-[14px] font-[620] leading-[1.4] text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
