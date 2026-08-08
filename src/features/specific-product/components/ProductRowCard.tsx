"use client";

import Star2 from "@/shared/icons/Star2";
import { BoxIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export interface ProductRowCardProps {
  title?: string;
  vendor?: string;
  rating?: number;
  reviewsCount?: number | string;
  minQuantity?: string;
  deliveryTime?: string;
  price?: string | number;
  currency?: string;
  priceLabel?: string;
  imageUrl?: string;
  className?: string;
}

export default function ProductRowCard({
  title,
  vendor,
  rating = 4.8,
  reviewsCount = "1,240",
  minQuantity = "500 pcs",
  deliveryTime,
  price = 180,
  currency,
  priceLabel,
  imageUrl,
  className = "",
}: ProductRowCardProps) {
  const t = useTranslations("SpecificProduct.card");

  const cardTitle = title || t("defaultTitleRow");
  const cardVendor = vendor || t("defaultVendor");
  const cardDelivery = deliveryTime || t("defaultDelivery");
  const cardCurrency = currency || t("currency");
  const cardPriceLabel = priceLabel || t("startingPrice");

  const formattedVendor = cardVendor.toLowerCase().startsWith("by ") || cardVendor.startsWith("بواسطة ")
    ? cardVendor
    : t("byVendor", { vendor: cardVendor });

  return (
    <div
      className={`bg-white border border-[#E5E7EB] rounded-3xl p-3.5 sm:p-4 flex items-center justify-between gap-4 shadow-xs hover:shadow-md transition-shadow duration-200 w-full ${className}`}
    >
      {/* Left Info Section */}
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
        {/* Thumbnail Image / Icon */}
        <div className="relative size-20 sm:size-24 rounded-2xl bg-[#F4F4F6] shrink-0 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={cardTitle}
              fill
              className="object-cover"
            />
          ) : (
            <BoxIcon className="size-10 sm:size-12 text-[#6B6B80]" />
          )}
        </div>

        {/* Content Details */}
        <div className="flex flex-col justify-center gap-0.5 min-w-0">
          <h3 className="font-semibold text-slate-900 text-base sm:text-lg leading-tight truncate">
            {cardTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium truncate">
            {formattedVendor}
          </p>

          <div className="flex items-center flex-wrap gap-1.5 mt-1 text-xs sm:text-sm font-semibold">
            <Star2 className="size-4 text-[#F59E0B] fill-[#F59E0B] shrink-0" />
            <span className="text-slate-900">{rating}</span>
            <span className="text-slate-500 font-normal">
              ({typeof reviewsCount === "number" ? reviewsCount.toLocaleString() : reviewsCount})
            </span>
            <span className="text-slate-400 font-normal">·</span>
            <span className="text-slate-900">{minQuantity}</span>
            <span className="text-slate-400 font-normal">·</span>
            <span className="text-slate-900">{cardDelivery}</span>
          </div>
        </div>
      </div>

      {/* Right Price Section */}
      <div className="flex flex-col items-end justify-center shrink-0 ms-2">
        <span className="text-xs font-medium text-slate-500">
          {cardPriceLabel}
        </span>
        <span className="text-lg sm:text-xl font-semibold text-[#0B6468]">
          {cardCurrency} {price}
        </span>
      </div>
    </div>
  );
}
