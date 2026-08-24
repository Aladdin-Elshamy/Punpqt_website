import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

type CustomRFQProgressProps = {
  steps: string[];
  activeStep: number;
};

export default function CustomRFQProgress({
  steps,
  activeStep,
}: CustomRFQProgressProps) {
  return (
    <div className="relative my-10 pt-7 sm:my-12 sm:pt-10">
      <div className="absolute top-0 inset-s-0 h-1 w-full rounded-full bg-border" />
      <div
        className="absolute top-0 inset-s-0 h-1 rounded-full bg-primary transition-all duration-300 ease-in-out"
        style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
      />
      <div className="mx-auto max-w-4xl overflow-x-auto px-1 pb-2">
        <ol className="flex w-full items-start" aria-label="Request for quote progress">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === activeStep;
            const isComplete = stepNumber < activeStep;

            return (
              <li key={step} className="flex min-w-0 flex-1 items-start last:flex-none">
                <div className="flex min-w-24 flex-col items-center gap-2 text-center">
                  <div
                    className={cn(
                      "flex size-8 items-center justify-center rounded-full border text-xs font-semibold",
                      isActive
                        ? "border-primary bg-primary/5 text-primary"
                        : isComplete
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-muted text-muted-foreground",
                    )}
                    aria-current={isActive ? "step" : undefined}
                  >
                    {isComplete ? <Check className="size-3.5" /> : <span className="trim">{stepNumber}</span>}
                  </div>
                  <span className={cn("whitespace-nowrap text-xs font-medium", isActive ? "text-primary" : "text-foreground")}>
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 ? <span className="mt-3 h-0.5 min-w-4 flex-1 rounded-full bg-border" /> : null}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
