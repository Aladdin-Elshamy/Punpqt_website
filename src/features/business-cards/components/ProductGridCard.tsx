"use client";

import { Badge } from "@/components/ui/badge";
import Star2 from "@/shared/icons/Star2";
import { BoxIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export interface ProductGridCardProps {
  title?: string;
  vendor?: string;
  rating?: number;
  reviewsCount?: number;
  price?: string | number;
  currency?: string;
  deliveryTime?: string;
  badge?: string;
  imageUrl?: string;
  className?: string;
}

export default function ProductGridCard({
  title,
  vendor,
  rating = 4.9,
  reviewsCount = 854,
  price = 250,
  currency,
  deliveryTime,
  badge,
  imageUrl,
  className = "",
}: ProductGridCardProps) {
  const t = useTranslations("BusinessCards.card");

  const cardTitle = title || t("defaultTitleGrid");
  const cardVendor = vendor || t("defaultVendor");
  const cardDelivery = deliveryTime || t("defaultDelivery");
  const cardCurrency = currency || t("currency");
  const cardBadge = badge || t("topRated");

  return (
    <div
      className={`bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col w-full ${className}`}
    >
      {/* Image / Icon Container */}
      <div className="relative w-full h-48 sm:h-52 bg-[#F4F4F6] flex items-center justify-center p-4">
        {cardBadge && (
          <Badge className="absolute top-3.5 left-3.5 text-xs font-semibold px-3 py-1 rounded-full z-10">
            {cardBadge}
          </Badge>
        )}

        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={cardTitle}
            fill
            className="object-cover"
          />
        ) : (
          <BoxIcon className="size-16 text-muted-foreground" />
        )}
      </div>

      {/* Details Container */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-2">
        <div>
          <h3 className="font-semibold text-slate-900 text-base sm:text-lg leading-snug line-clamp-1">
            {cardTitle}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
            {cardVendor}
          </p>

          <div className="flex items-center font-semibold gap-1.5 mt-2 text-xs sm:text-sm">
            <Star2 className="size-4 text-[#F59E0B] fill-[#F59E0B]" />
            <span className="text-slate-900">{rating}</span>
            <span className="text-muted-foreground ">({reviewsCount})</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 mt-auto">
          <span className="text-lg sm:text-xl font-semibold text-[#0B6468]">
            {cardCurrency} {price}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
            {cardDelivery}
          </span>
        </div>
      </div>
    </div>
  );
}
