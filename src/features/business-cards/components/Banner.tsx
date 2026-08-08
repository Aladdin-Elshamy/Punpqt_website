"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Banner({ children }: { children: React.ReactNode }) {
  const t = useTranslations("BusinessCards.hero");

  return (
    <div className="bg-white p-6 rounded-2xl flex flex-col sm:flex-row gap-4 border relative z-10 mt-3">
      {children}
      <Button className={"rounded-2xl mt-auto h-10 px-5"}>
        {t("customRfq")}
      </Button>
    </div>
  );
}