"use client";

import { Badge } from "@/components/ui/badge";
import Shield from "@/shared/icons/Shield";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("PrivacyPolicy.hero");

  return (
    <div className="container mx-auto mt-36 pb-40 md:px-8 lg:px-6 sm:pb-60 2xl:w-full 2xl:px-0">
      <Badge className="h-8! border-[#0D73771A] px-4 font-semibold">
        <Shield /> {t("badge")}
      </Badge>
      <h1 className="mt-6 text-3xl font-bold sm:text-4xl text-primary">
        {t("title")}
      </h1>
      <p className="mt-5 max-w-lg font-semibold text-muted-foreground">
        {t("description")}
      </p>
      <p className="text-sm mt-12 text-muted-foreground font-semibold">
        {t("lastUpdated")}
      </p>
    </div>
  );
}
