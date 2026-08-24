import { getTranslations } from "next-intl/server";

import CustomRFQFlow from "@/features/custom-rfq/sections/CustomRFQFlow";
import CustomRFQHeader from "@/features/custom-rfq/components/CustomRFQHeader";
import { CUSTOM_RFQ_STEP_KEYS } from "@/features/custom-rfq/custom-rfq.steps";

export default async function CustomRFQPage() {
  const t = await getTranslations("CustomRFQ");
  const steps = CUSTOM_RFQ_STEP_KEYS.map((step) => t(`steps.${step}`));

  return (
    <main className="bg-[#FAFAFA] pt-36 pb-10 sm:pb-38">
      
        <CustomRFQHeader
          badge={t("badge")}
          title={t("title")}
          description={t("description")}
        />
        <CustomRFQFlow
          steps={steps}
          backLabel={t("navigation.back")}
          continueLabel={t("navigation.continue")}
          stepOfLabel={t("navigation.stepOf", {
            current: "{current}",
            total: "{total}",
          })}
        />
    </main>
  );
}
