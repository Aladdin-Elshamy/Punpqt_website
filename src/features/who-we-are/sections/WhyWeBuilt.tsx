"use client";

import { useTranslations } from "next-intl";
import WhyWeBuiltMetricCard from "../components/WhyWeBuiltMetricCard";

export default function WhyWeBuilt() {
  const t = useTranslations("WhoWeAre.whyWeBuilt");

  const milestones = [
    { value: "2026", label: t("milestones.founded") },
    { value: "Day 1", label: t("milestones.escrow") },
    { value: "150+", label: t("milestones.printers") },
    { value: "EGP 0", label: t("milestones.fees") },
  ];

  return (
    <section className="container px-6 md:px-8 lg:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">{t("title")}</h2>

          <div className="mt-5 space-y-5 text-sm leading-6 font-semibold text-muted-foreground sm:text-base sm:leading-7">
            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
            <p>{t("paragraph3")}</p>
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {milestones.map(({ value, label }) => (
            <div key={value}>
              <dt className="sr-only">{label}</dt>
              <dd>
                <WhyWeBuiltMetricCard value={value} label={label} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}