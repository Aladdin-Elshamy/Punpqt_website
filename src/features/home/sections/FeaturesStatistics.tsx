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
      title: t("avgResponseTime"),
      number: "< 2h",
    },
    {
      title: t("customerRating"),
      number: "4.8 ★",
    },
  ];

  return (
    <section className="container pb-20 mt-16 mx-auto px-6 md:px-8 lg:px-6">
      <div className="flex items-baseline pt-9 border-t gap-8 flex-wrap justify-center lg:justify-start max-w-2xl">
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