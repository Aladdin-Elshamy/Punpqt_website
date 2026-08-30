"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/shared/icons/ArrowRight";
import Star from "@/shared/icons/Star";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("WhoWeAre.hero");

  return (
    <div className="container 2xl:px-0 2xl:w-full pb-16 sm:pb-36 mt-36 mx-auto md:px-8 lg:px-6">
      <Badge className="h-8! font-semibold px-4 border-[#0D73771A] ">
        <Star /> {t("badge")}
      </Badge>
      <h1 className="font-bold text-3xl sm:text-4xl mt-6">
        {t("titleLine1")}
        <br />
        <span className="text-primary rtl:mt-4 rtl:block">
          {t("titleLine2")}
        </span>
      </h1>
      <p className="text-[#6B6B80] font-semibold max-w-lg mt-5">
        {t("description")}
      </p>
      <div className="flex gap-4 flex-col sm:flex-row mt-14 relative z-10">
        <Button className={"h-12 px-6 rounded-3xl font-semibold tracking-wide"} nativeButton={false} render={<Link href={"/products"} >
          <span className="trim">{t("browseProducts")}</span>
          <ArrowRight />
        </Link>}
        />
        <Button
          className={
            "h-12 px-8 rounded-3xl bg-white border border-border font-semibold"
          }
          variant={"secondary"}
          nativeButton={false}
          render={<Link href={"/get-in-touch"}>
            {t("getInTouch")}
          </Link>}
        />
      </div>
    </div>
  );
}

