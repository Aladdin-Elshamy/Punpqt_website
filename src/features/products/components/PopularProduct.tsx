import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { Product } from "../models/products.model";

export default function PopularProduct({ product }: { product: Product }) {
  const t = useTranslations("PopularProducts");

  return (
    <Link href={`/products/${product.slug}`} className="group block h-full">
      <article className="overflow-hidden h-full flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 rounded-2xl border border-black/8 bg-white shadow-xs hover:shadow-md relative @container/popular-product">
        <div className="h-28 bg-[linear-gradient(90deg,#F4F4F6_0%,#00645D_100%)] relative flex items-center justify-center overflow-hidden">
          {product.image_url ? (
            <div className="relative w-3/4 h-3/4">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ) : (
            <span className="text-white font-bold text-sm tracking-wider">
              PUNQT
            </span>
          )}

          {product.lowest_price !== null && (
            <span className="absolute bottom-2 start-2 text-[11px] font-bold text-teal-900 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-full shadow-xs">
              {t("currency")} {product.lowest_price}
            </span>
          )}
        </div>

        <div className="p-4 pb-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-black group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="mt-1 text-xs font-medium text-[#6B6B80] line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
