import Image from "next/image";
import Link from "next/link";
import Star2 from "@/shared/icons/Star2";
import Check from "@/shared/icons/Check";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getTranslations } from "next-intl/server";

export interface PrinterCardProps {
    id?: string;
    name?: string;
    logoUrl?: string;
    initials?: string;
    isVerified?: boolean;
    isFastResponse?: boolean;
    location?: string;
    tags?: string[];
    rating?: number;
    reviewsCount?: number | string;
    deliveryTime?: string;
    startingPrice?: number | string;
    currency?: string;
    priceLabel?: string;
    buttonText?: string;
    actionHref?: string;
    productSlug?: string;
    className?: string;
}

export default async function PrinterCard({
    name,
    logoUrl,
    initials,
    isVerified = true,
    isFastResponse = true,
    location,
    tags,
    rating = 4.9,
    reviewsCount = 854,
    deliveryTime,
    startingPrice,
    currency,
    priceLabel,
    buttonText,
    actionHref,
    productSlug,
    className = "",
}: PrinterCardProps) {
    const t = await getTranslations("SpecificProduct.printerCard");
    const hasPrice = startingPrice !== undefined && startingPrice !== null;
    const displayName = name || t("defaults.name");
    const displayInitials = initials || t("defaults.initials");
    const displayLocation = location || t("defaults.location");
    const displayTags = tags || [t("defaults.tags.offset"), t("defaults.tags.lamination")];
    const displayDeliveryTime = deliveryTime || t("defaults.deliveryTime");
    const displayCurrency = currency || t("defaults.currency");
    const actionText =
        buttonText || (hasPrice ? t("selectPrinter") : t("requestQuotation"));
    const displayPriceLabel = priceLabel || t("startingPrice");
    const resolvedActionHref = actionHref || `/products/${productSlug || ""}/printers`;

    return (
        <div
            className={`bg-white border border-[#E5E7EB] rounded-3xl py-4 px-7 flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 shadow-2xs hover:shadow-xs transition-shadow duration-200 w-full ${className}`}
        >
            {/* Left Info Group */}
            <div className="flex items-start gap-3.5 sm:gap-4 min-w-0 flex-1">
                {/* Avatar / Logo */}
                <div className="relative size-14 sm:size-16 rounded-2xl bg-[#0E0F12] shrink-0 flex items-center justify-center overflow-hidden">
                    {logoUrl ? (
                        <Image src={logoUrl} alt={displayName} fill className="object-cover" />
                    ) : (
                        <span className="text-white font-bold text-base sm:text-lg select-none">
                            {displayInitials}
                        </span>
                    )}
                </div>

                {/* Details Column */}
                <div className="flex flex-col gap-4 min-w-0 flex-1">
                    {/* Title Row */}
                    <div className="flex items-center flex-wrap gap-2">
                        <h3 className="font-bold text-base sm:text-lg leading-tight truncate">
                            {displayName}
                        </h3>

                        {isVerified && (
                            <span
                                className="inline-flex items-center text-primary shrink-0"
                                title={t("verifiedPrinter")}
                            >
                                <Check className="size-4.5" />
                            </span>
                        )}

                        {isFastResponse && (
                            <Badge className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0">
                                {t("fastResponse")}
                            </Badge>
                        )}
                    </div>

                    {/* Location & Tags Row */}
                    <div className="flex items-center flex-wrap gap-5 text-xs sm:text-sm">
                        <span className="font-semibold text-muted-foreground truncate">
                            {displayLocation}
                        </span>
                        <div className="flex items-center flex-wrap gap-1.5">
                            {displayTags.map((tag, idx) => (
                                <Badge
                                    key={idx}
                                    variant={"secondary"}
                                    className="px-2.5 py-0.5 rounded-lg text-xs font-medium"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Rating & Delivery Row */}
                    <div className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm font-semibold">
                        <Star2 className="size-4 text-[#F59E0B] fill-[#F59E0B] shrink-0" />
                        <span className="text-slate-900">{rating}</span>
                        <span className="text-slate-500 font-normal">
                            (
                            {typeof reviewsCount === "number"
                                ? reviewsCount.toLocaleString()
                                : reviewsCount}
                            )
                        </span>
                        <span className="text-slate-400 font-normal mx-0.5">Â·</span>
                        <span className="text-slate-900">{displayDeliveryTime}</span>
                    </div>
                </div>
            </div>

            {/* Right Pricing & Action Group */}
            <div
                className={`flex flex-col shrink-0 items-start gap-3 min-w-35 ${hasPrice ? "ps-4 justify-between self-stretch border-s-2 border-slate-200/80 " : "justify-end sm:self-end"
                    }
                    `}
            >
                {hasPrice && (
                    <div className="py-0.5 text-end flex flex-col items-start w-full">
                        <span className="text-xs font-medium text-muted-foreground leading-tight">
                            {displayPriceLabel}
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-primary leading-tight">
                            {displayCurrency} {startingPrice}
                        </span>
                    </div>
                )}

                <Button
                    nativeButton={false}
                    render={<Link href={resolvedActionHref} />}
                    variant={"outline"}
                    className="w-full sm:w-auto h-9 px-3.5"
                >
                    {actionText}
                </Button>
            </div>
        </div>
    );
}




