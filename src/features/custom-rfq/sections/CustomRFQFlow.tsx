"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";

import CustomRFQNavigation from "@/features/custom-rfq/components/CustomRFQNavigation";
import CustomRFQProgress from "@/features/custom-rfq/components/CustomRFQProgress";
import { CUSTOM_RFQ_TOTAL_STEPS } from "@/features/custom-rfq/custom-rfq.steps";
import {
  initialCustomRFQDraft,
  type CustomRFQDraft,
} from "@/features/custom-rfq/custom-rfq.types";
import CustomRFQChooseVendors from "@/features/custom-rfq/sections/CustomRFQChooseVendors";
import CustomRFQDelivery from "@/features/custom-rfq/sections/CustomRFQDelivery";
import CustomRFQProductType from "@/features/custom-rfq/sections/CustomRFQProductType";
import CustomRFQReviewSubmit from "@/features/custom-rfq/sections/CustomRFQReviewSubmit";
import CustomRFQSpecifications from "@/features/custom-rfq/sections/CustomRFQSpecifications";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";

type Props = {
  steps: string[];
  backLabel: string;
  continueLabel: string;
  stepOfLabel: string;
};

export default function CustomRFQFlow({
  steps,
  backLabel,
  continueLabel,
  stepOfLabel,
}: Props) {
  const t = useTranslations("CustomRFQ.navigation");
  const [activeStep, setActiveStep] = useState(1);
  const [draft, setDraft] = useState<CustomRFQDraft>(initialCustomRFQDraft);
  const [isDeliveryValid, setIsDeliveryValid] = useState(true);
  const [isVendorSelectionValid, setIsVendorSelectionValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const stepLabel = stepOfLabel
    .replace("{current}", String(activeStep))
    .replace("{total}", String(CUSTOM_RFQ_TOTAL_STEPS));

  const updateDraft = useCallback((patch: Partial<CustomRFQDraft>) => {
    setDraft((current) => ({ ...current, ...patch }));
  }, []);

  const handleContinue = () => {
    if (activeStep === CUSTOM_RFQ_TOTAL_STEPS) {
      setIsSubmitted(true);
      return;
    }

    setActiveStep((step) => Math.min(CUSTOM_RFQ_TOTAL_STEPS, step + 1));
  };

  const continueDisabled =
    (activeStep === 3 && !isDeliveryValid) ||
    (activeStep === 4 && !isVendorSelectionValid) ||
    isSubmitted;

  return (
    <>
      <CustomRFQProgress steps={steps} activeStep={activeStep} />
      <div className={cn("container", activeStep !== 1 ? "max-w-4xl" : "")}>
        {activeStep === 1 ? (
          <CustomRFQProductType
            selectedProduct={draft.productType}
            onSelect={(productType) => updateDraft({ productType })}
          />
        ) : null}
        {activeStep === 2 ? (
          <CustomRFQSpecifications draft={draft} onChange={updateDraft} />
        ) : null}
        {activeStep === 3 ? (
          <CustomRFQDelivery
            draft={draft}
            onChange={updateDraft}
            onValidityChange={setIsDeliveryValid}
          />
        ) : null}
        {activeStep === 4 ? (
          <CustomRFQChooseVendors
            mode={draft.vendorMode}
            selected={draft.selectedVendors}
            onModeChange={(vendorMode) => updateDraft({ vendorMode })}
            onSelectedChange={(selectedVendors) =>
              updateDraft({ selectedVendors })
            }
            onValidityChange={setIsVendorSelectionValid}
          />
        ) : null}
        {activeStep === 5 ? <CustomRFQReviewSubmit draft={draft} /> : null}
        {isSubmitted ? (
          <p
            role="status"
            className="mt-5 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary"
          >
            {t("submissionComplete")}
          </p>
        ) : null}
        <CustomRFQNavigation
          activeStep={activeStep}
          backLabel={backLabel}
          continueLabel={activeStep === 5 ? <span className="flex items-center gap-2"> <Send /> {t("submitRequest")}</span> : continueLabel}
          stepLabel={stepLabel}
          onBack={() => {
            setIsSubmitted(false);
            setActiveStep((step) => Math.max(1, step - 1));
          }}
          onContinue={handleContinue}
          continueDisabled={continueDisabled}
        />
      </div>
    </>
  );
}
