import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { Product } from "../models/products.model";

export default function ProductCatalogCard({ product }: { product: Product }) {
  const t = useTranslations("AllProducts");
  const tCommon = useTranslations("PopularProducts");

  return (
    <Link href={`/products/${product.slug}`} className="block h-full group">
      <article className="relative overflow-hidden h-full flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 rounded-3xl border border-black/6 bg-white p-6 shadow-xs hover:shadow-md @container/product-card">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-lg font-bold text-black group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            {product.lowest_price !== null && (
              <span className="shrink-0 text-xs font-bold text-teal-800 bg-[#E8F4F4] px-2.5 py-1 rounded-full">
                {tCommon("currency")} {product.lowest_price}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm leading-snug font-medium text-[#55577A] line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-12 z-20 relative font-semibold flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-primary">
              {product.printers_count > 0
                ? t("printersCount", { count: product.printers_count })
                : t("availableNow")}
            </p>
            <span className="text-xs text-[#6B6B80] mt-1 block">
              {product.pricing_type === "fixed"
                ? tCommon("pricingType.fixed")
                : tCommon("pricingType.calculated")}
            </span>
          </div>
        </div>

        {product.image_url && (
          <div className="hidden @sm/product-card:block sm:block absolute md:bottom-0 md:-end-6 xl:-bottom-4 -end-8 bottom-0 w-36 sm:w-40 xl:w-48 h-32 sm:h-36 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-300">
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 150px, 200px"
              className="object-contain"
            />
          </div>
        )}
      </article>
    </Link>
  );
}

