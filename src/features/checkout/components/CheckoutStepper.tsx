"use client";

import { cn } from "@/lib/utils";
import Check from "@/shared/icons/Check";

export type CheckoutStep = "review" | "upload";

interface CheckoutStepperProps {
    activeStep: CheckoutStep;
}

const steps: { id: CheckoutStep; label: string }[] = [
    { id: "review", label: "Review Order" },
    { id: "upload", label: "Upload Files" },
];

export default function CheckoutStepper({ activeStep }: CheckoutStepperProps) {
    const activeIndex = steps.findIndex((step) => step.id === activeStep);

    return (
        <ol className="flex w-full max-w-md items-center">
            {steps.map((step, index) => {
                const isActive = activeStep === step.id;
                const isComplete = index < activeIndex;

                return (
                    <li
                        key={step.id}
                        className="flex min-w-0 flex-1 items-center last:flex-none"
                    >
                        <div className="flex shrink-0 items-center gap-2">
                            <span
                                className={cn(
                                    "flex size-7 items-center justify-center rounded-full text-xs border-2 font-semibold",
                                    isActive && "border-black  text-black",
                                    isComplete &&
                                    "border-primary bg-primary text-primary-foreground",
                                    !isActive &&
                                    !isComplete &&
                                    "border-border bg-background text-muted-foreground",
                                )}
                            >
                                {isComplete ? <Check className="size-3.5" /> : <span className="trim">{index + 1}</span>}
                            </span>
                            <span
                                className={cn(
                                    "whitespace-nowrap text-sm font-semibold",
                                    isActive || isComplete
                                        ? "text-foreground"
                                        : "text-muted-foreground",
                                )}
                            >
                                {step.label}
                            </span>
                        </div>

                        {index < steps.length - 1 && (
                            <span
                                className={cn(
                                    "mx-3 h-0.5 min-w-5 flex-1",
                                    isComplete ? "bg-primary" : "bg-border",
                                )}
                            />
                        )}
                    </li>
                );
            })}
        </ol>
    );
}