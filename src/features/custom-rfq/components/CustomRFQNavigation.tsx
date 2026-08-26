import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type CustomRFQNavigationProps = {
  activeStep: number;
  backLabel: string;
  continueLabel: string | ReactNode;
  stepLabel: string;
  onBack?: () => void;
  onContinue?: () => void;
  continueDisabled?: boolean;
};

export default function CustomRFQNavigation({
  activeStep,
  backLabel,
  continueLabel,
  stepLabel,
  onBack,
  onContinue,
  continueDisabled = false,
}: CustomRFQNavigationProps) {
  return (
    <nav
      className="mt-7.5 grid grid-cols-1 sm:grid-cols-3 items-center gap-3"
      aria-label="Request for quote navigation"
    >
      <Button
        variant="outline"
        disabled={activeStep === 1}
        onClick={onBack}
        className="h-12 sm:justify-self-start rounded-2xl border-black/6 px-10"
      >
        <ChevronLeft className="rtl:rotate-180" />
        {backLabel}
      </Button>
      <p className="text-center text-sm font-semibold text-muted-foreground">
        {stepLabel}
      </p>
      <Button
        disabled={continueDisabled}
        onClick={onContinue}
        className="h-12 sm:justify-self-end rounded-2xl px-10"
        aria-label={
          typeof continueLabel !== "string" ? "Submit RFQ" : continueLabel
        }
      >
        {continueLabel}
        {typeof continueLabel !== "string" ? null : (
          <ChevronRight className="rtl:rotate-180" />
        )}
      </Button>
    </nav>
  );
}
