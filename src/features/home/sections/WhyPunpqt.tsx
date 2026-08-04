import Shield from "@/shared/icons/Shield";
import Heading from "../components/Heading";
import Step from "../components/Step";
import Fast from "@/shared/icons/Fast";
import Check from "@/shared/icons/Check";
import { Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyPunpqt() {
  const t = useTranslations("WhyPunpqt");

  return (
    <section className="container mx-auto px-6 md:px-8 lg:px-6">
      <div className="p-12 border-[0.99px] border-[#0000000F] rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
        <Heading
          title={
            <span className="uppercase font-semibold tracking-widest">
              {t("title")}
            </span>
          }
          description={
            <p className="text-3xl font-semibold mt-3">
              {t("description")}
            </p>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 pt-4">
          <Step
            icon={<Shield className="text-primary" />}
            title={t("steps.verifiedPrinters.title")}
            description={t("steps.verifiedPrinters.description")}
          />
          <Step
            icon={<Fast className="text-primary" />}
            title={t("steps.fastQuotes.title")}
            description={t("steps.fastQuotes.description")}
          />
          <Step
            icon={<Check className="text-primary w-5! h-5!" />}
            title={t("steps.qualityControl.title")}
            description={t("steps.qualityControl.description")}
          />
          <Step
            icon={<Clock className="text-primary w-5! h-5!" />}
            title={t("steps.reliableDelivery.title")}
            description={t("steps.reliableDelivery.description")}
          />
        </div>
      </div>
    </section>
  );
}