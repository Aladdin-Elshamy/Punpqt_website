import Shield from "@/shared/icons/Shield";
import Feature from "../components/Feature";
import Fast from "@/shared/icons/Fast";
import Check from "@/shared/icons/Check";
import { useTranslations } from "next-intl";
import type { HomeFeature } from "../models/features.model";

function getFeatureIcon(key: string) {
  switch (key) {
    case "quality_guarantee":
      return <Check className="text-primary" />;
    case "verified_printers":
      return <Shield className="text-primary" />;
    case "competitive_pricing":
      return <Fast className="text-primary" />;
    default:
      return <Shield className="text-primary" />;
  }
}

export default function ChooseUs({
  features: apiFeatures,
}: {
  features?: HomeFeature[];
}) {
  const t = useTranslations("ChooseUs");

  const features =
    apiFeatures && apiFeatures.length > 0
      ? apiFeatures.map((f) => ({
          key: f.key,
          title: f.title,
          description: f.description,
          icon: getFeatureIcon(f.key),
        }))
      : [
          {
            key: "verifiedPrinters",
            title: t("features.verifiedPrinters.title"),
            description: t("features.verifiedPrinters.description"),
            icon: <Shield className="text-primary" />,
          },
          {
            key: "fastResponses",
            title: t("features.fastResponses.title"),
            description: t("features.fastResponses.description"),
            icon: <Fast className="text-primary" />,
          },
          {
            key: "bestPrices",
            title: t("features.bestPrices.title"),
            description: t("features.bestPrices.description"),
            icon: <Fast className="text-primary" />,
          },
        ];

  return (
    <section className="container mt-36 mx-auto border-[0.99px] border-[#0000000F] bg-[#FCFCFC] rounded-2xl shadow-sm">
      <div className="py-8 px-6">
        <h2 className="text-3xl font-bold text-center mb-2">{t("title")}</h2>
        <p className="text-center font-semibold text-[#6B6B80]">
          {t("description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {features.map((feature) => (
            <Feature
              key={feature.key || feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
