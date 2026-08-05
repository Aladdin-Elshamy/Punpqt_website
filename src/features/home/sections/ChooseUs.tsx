import Shield from "@/shared/icons/Shield";
import Feature from "../components/Feature";
import Fast from "@/shared/icons/Fast";
import { useTranslations } from "next-intl";

export default function ChooseUs() {
  const t = useTranslations("ChooseUs");

  const features = [
    {
      title: t("features.verifiedPrinters.title"),
      description: t("features.verifiedPrinters.description"),
      icon: <Shield className="text-primary" />,
    },
    {
      title: t("features.fastResponses.title"),
      description: t("features.fastResponses.description"),
      icon: <Fast className="text-primary" />,
    },
    {
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
              key={feature.title}
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