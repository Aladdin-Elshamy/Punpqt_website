"use client";

import { useCallback, useState } from "react";

import CustomRFQNavigation from "@/features/custom-rfq/components/CustomRFQNavigation";
import CustomRFQProgress from "@/features/custom-rfq/components/CustomRFQProgress";
import { CUSTOM_RFQ_TOTAL_STEPS } from "@/features/custom-rfq/custom-rfq.steps";
import CustomRFQDelivery from "@/features/custom-rfq/sections/CustomRFQDelivery";
import CustomRFQProductType from "@/features/custom-rfq/sections/CustomRFQProductType";
import CustomRFQSpecifications from "@/features/custom-rfq/sections/CustomRFQSpecifications";
import { cn } from "@/lib/utils";

type CustomRFQFlowProps = { steps: string[]; backLabel: string; continueLabel: string; stepOfLabel: string };

export default function CustomRFQFlow({ steps, backLabel, continueLabel, stepOfLabel }: CustomRFQFlowProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [isDeliveryValid, setIsDeliveryValid] = useState(false);
  const handleDeliveryValidityChange = useCallback((isValid: boolean) => setIsDeliveryValid(isValid), []);
  const stepLabel = stepOfLabel.replace("{current}", String(activeStep)).replace("{total}", String(CUSTOM_RFQ_TOTAL_STEPS));
  const continueDisabled = activeStep === 3 && !isDeliveryValid;

  return (
    <div className={cn("container", activeStep !== 1 ? "max-w-4xl" : "")}>
      <CustomRFQProgress steps={steps} activeStep={activeStep} />
      {activeStep === 1 ? <CustomRFQProductType /> : null}
      {activeStep === 2 ? <CustomRFQSpecifications /> : null}
      {activeStep === 3 ? <CustomRFQDelivery onValidityChange={handleDeliveryValidityChange} /> : null}
      <CustomRFQNavigation
        activeStep={activeStep}
        backLabel={backLabel}
        continueLabel={continueLabel}
        stepLabel={stepLabel}
        onBack={() => setActiveStep((step) => Math.max(1, step - 1))}
        onContinue={() => setActiveStep((step) => Math.min(3, step + 1))}
        continueDisabled={continueDisabled}
      />
    </div>
  );
}
