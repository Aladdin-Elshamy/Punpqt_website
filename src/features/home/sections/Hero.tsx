import { Badge } from "@/components/ui/badge";
import Star from "@/shared/icons/Star";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import type { AdsData } from "../models/ads.model";

export default function Hero({ ads }: { ads?: AdsData } = {}) {
  const t = useTranslations("Hero");
  const promoAd = ads?.large?.[0];

  return (
    <div className="container 2xl:px-0 2xl:w-full mt-36 mx-auto md:px-8 lg:px-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <Badge className="h-8! font-semibold px-4 border-[#0D73771A] ">
            <Star /> {t("badge")}
          </Badge>
          <h1 className="font-bold text-3xl sm:text-4xl mt-6">
            {t("title.line1")}
            <br />
            <span className="text-primary rtl:mt-4 rtl:block">
              {t("title.line2")}
            </span>
          </h1>
          <p className="text-[#6B6B80] font-semibold max-w-lg mt-5">
            {t("description")}
          </p>
        </div>

        {promoAd && (
          <div className="relative overflow-hidden rounded-3xl border border-black/8 shadow-sm lg:max-w-md w-full h-48 sm:h-56">
            <Link
              href={promoAd.url || "/products"}
              className="block relative w-full h-full group"
            >
              <Image
                src={promoAd.image_url}
                alt={promoAd.title || t("adAlt")}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <Badge className="absolute top-3 end-3 bg-white/90 text-black backdrop-blur-xs font-semibold z-10">
                {t("adBadge")}
              </Badge>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
