"use client";

import { CircleCheck, ShieldCheck, UsersRound, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

import WhatWeStandForCard from "../components/WhatWeStandForCard";

export default function WhatWeStandFor() {
  const t = useTranslations("WhoWeAre.whatWeStandFor");

  const principles = [
    {
      title: t("trust.title"),
      description: t("trust.description"),
      icon: ShieldCheck,
    },
    {
      title: t("quality.title"),
      description: t("quality.description"),
      icon: CircleCheck,
    },
    {
      title: t("speed.title"),
      description: t("speed.description"),
      icon: Zap,
    },
    {
      title: t("local.title"),
      description: t("local.description"),
      icon: UsersRound,
    },
  ];

  return (
    <section className="container mt-16 sm:mt-36 px-6 md:px-8 lg:px-6">
      <div className="mx-auto max-w-2xl text-center font-semibold">
        <h2 className="text-2xl sm:text-3xl">{t("title")}</h2>
        <p className="mt-3 text-muted-foreground">
          {t("subtitle")}
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
        {principles.map(({ title, description, icon }) => (
          <WhatWeStandForCard
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
}