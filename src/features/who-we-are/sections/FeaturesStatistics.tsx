import { useTranslations } from "next-intl";
import FeatureStatistics from "../components/FeatureStatistics";

export default function FeaturesStatistics() {
  const t = useTranslations("FeaturesStatistics.features");

  const features = [
    {
      title: t("verifiedPrinters"),
      number: "500+",
    },
    {
      title: t("ordersCompleted"),
      number: "42,000+",
    },
    {
      title: "Customer satisfaction",
      number: "98%",
    },
    {
      title: "Governorates covered",
      number: "4",
    },
  ];

  return (
    <section className="container pb-16 sm:pb-36 pt-16 mx-auto px-6 md:px-8 lg:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 justify-center mx-auto">
        {features.map((feature) => (
          <FeatureStatistics
            key={feature.title}
            title={feature.title}
            number={feature.number}
          />
        ))}
      </div>
    </section>
  );
}