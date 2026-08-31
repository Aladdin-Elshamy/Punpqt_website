import { Badge } from "@/components/ui/badge";
import Star2 from "@/shared/icons/Star2";
import { BoxIcon } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

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
  productSlug?: string;
}

export default async function ProductGridCard({
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
  productSlug,
}: ProductGridCardProps) {
  const t = await getTranslations("SpecificProduct.card");
  const cardTitle = title || t("defaultTitleGrid");
  const cardVendor = vendor || t("defaultVendor");
  const cardDelivery = deliveryTime || t("defaultDelivery");
  const cardCurrency = currency || t("currency");
  const cardBadge = badge || t("topRated");
  const href = productSlug
    ? `/products/${productSlug}/${cardTitle}`
    : cardTitle;

  return (
    <Link
      href={href}
      className={`bg-white border hover:scale-103 border-[#E5E7EB] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col w-full ${className}`}
    >
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

      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-2">
        <div>
          <h3 className="font-semibold text-black text-base leading-snug line-clamp-1">
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
          <span className="text-base font-semibold text-[#0B6468]">
            {cardCurrency} {price}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
            {cardDelivery}
          </span>
        </div>
      </div>
    </Link>
  );
}
