import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { Product } from "../models/products.model";

export default function ProductCategory({ product }: { product: Product }) {
  const t = useTranslations("BrowseByProducts");

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex items-center gap-4 rounded-2xl border border-black/8 bg-white p-4 shadow-xs transition-all hover:border-primary/40 hover:shadow-md"
    >
      <div className="relative h-20 w-30 shrink-0 overflow-hidden rounded-xl flex items-center justify-center">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            sizes="80px"
            className="object-contain p-1 transition-transform group-hover:scale-105"
          />
        ) : (
          <span className="text-xs font-semibold text-muted-foreground">PUNQT</span>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <h4 className="font-semibold text-base text-black truncate group-hover:text-primary transition-colors">
          {product.name}
        </h4>
        <p className="text-xs text-[#6B6B80] line-clamp-2 mt-1">
          {product.description}
        </p>
        {product.lowest_price !== null && (
          <span className="text-xs font-semibold text-primary mt-2">
            {t("currency")} {product.lowest_price}
          </span>
        )}
      </div>
    </Link>
  );
}
