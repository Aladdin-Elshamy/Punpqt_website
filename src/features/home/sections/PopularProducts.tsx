import Heading from "../components/Heading";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/shared/icons/ArrowRight";
import { useTranslations } from "next-intl";
import Link from "next/link";
import type { Product } from "../models/products.model";
import type { AdItem } from "../models/ads.model";

export default function PopularProducts({
  products,
  ad,
}: {
  products?: Product[];
  ad?: AdItem | null;
}) {
  const t = useTranslations("PopularProducts");
  const productList = products ?? [];

  const mainProduct = productList[0];
  const secondProduct = productList[1];
  const remainingProducts = productList.slice(2);

  return (
    <section className="container py-20 mx-auto px-6 md:px-8 lg:px-6">
      <div className="flex items-end justify-between">
        <Heading
          title={t("title")}
          description={
            <p className="text-3xl sm:text-4xl font-semibold">
              {t("description.before")}
              <span className="text-primary">{t("description.highlight")}</span>
            </p>
          }
        />
        <Button
          variant="link"
          className="mt-4 text-sm font-semibold text-primary items-center gap-0"
          render={
            <Link href={"/products"}>
              {t("allProducts")}
              <ArrowRight className="rtl:scale-x-[-1] ms-2" />
            </Link>
          }
          nativeButton={false}
        />
      </div>

      {productList.length > 0 ? (
        <div
          className="grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-12
          gap-4
          auto-rows-[14rem] sm:auto-rows-[16rem] mt-8"
        >
          {/* Main / Featured Product */}
          {mainProduct && (
            <Link
              href={`/products/${mainProduct.slug}`}
              className="group xl:col-span-7 xl:row-span-2 rounded-3xl relative bg-[#0D7377]/10 border border-[#0D7377]/20 overflow-hidden p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-lg"
            >
              <div className="flex justify-between items-start z-10">
                <Badge className="h-7 px-3 font-semibold bg-primary text-white">
                  {t("badges.bestSeller")}
                </Badge>
                {mainProduct.lowest_price !== null && (
                  <span className="text-sm font-bold text-primary bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full">
                    {t("currency")} {mainProduct.lowest_price}
                  </span>
                )}
              </div>

              {mainProduct.image_url && (
                <div className="absolute inset-0 flex items-center justify-end p-4 pointer-events-none opacity-90 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative w-2/3 h-2/3 max-w-xs">
                    <Image
                      src={mainProduct.image_url}
                      alt={mainProduct.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

              <div className="z-10 mt-auto max-w-sm">
                <h3 className="text-2xl sm:text-3xl font-bold text-black group-hover:text-primary transition-colors">
                  {mainProduct.name}
                </h3>
                <p className="text-sm font-medium text-[#55577A] line-clamp-2 mt-2">
                  {mainProduct.description}
                </p>
              </div>
            </Link>
          )}

          {/* Second Product */}
          {secondProduct && (
            <Link
              href={`/products/${secondProduct.slug}`}
              className="group xl:col-span-5 xl:row-span-1 rounded-3xl bg-white relative overflow-hidden border p-6 flex flex-col justify-between transition-all hover:shadow-md hover:border-primary/40"
            >
              <div className="flex justify-between items-start z-10">
                <Badge className="h-6 px-3 bg-[#E8F4F4] text-teal-800 font-semibold border-0">
                  {t("badges.premium")}
                </Badge>
                {secondProduct.lowest_price !== null && (
                  <span className="text-xs font-bold text-primary">
                    {t("currency")} {secondProduct.lowest_price}
                  </span>
                )}
              </div>

              {secondProduct.image_url && (
                <div className="absolute inset-y-0 end-0 w-1/2 flex items-center justify-center p-2 pointer-events-none opacity-90 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative w-full h-4/5">
                    <Image
                      src={secondProduct.image_url}
                      alt={secondProduct.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

              <div className="z-10 max-w-[55%]">
                <h3 className="text-lg sm:text-xl font-bold text-black group-hover:text-primary transition-colors">
                  {secondProduct.name}
                </h3>
                <p className="text-xs text-[#6B6B80] line-clamp-2 mt-1">
                  {secondProduct.description}
                </p>
              </div>
            </Link>
          )}

          {/* Ad Slot / Billboard */}
          {ad && (
            <div className="xl:col-span-5 xl:row-span-1 rounded-3xl relative overflow-hidden border bg-muted group">
              <Link
                href={ad.url || "/products"}
                className="absolute inset-0 block"
              >
                <Image
                  src={ad.image_url}
                  alt={ad.title || t("adAlt")}
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <Badge className="absolute top-4 end-4 h-7 px-3 bg-white/90 text-black backdrop-blur-xs font-semibold z-10">
                  {t("badges.popular")}
                </Badge>
              </Link>
            </div>
          )}

          {/* Remaining Products */}
          {remainingProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group xl:col-span-4 xl:row-span-1 rounded-3xl bg-white relative overflow-hidden border p-6 flex flex-col justify-between transition-all hover:shadow-md hover:border-primary/40"
            >
              <div className="flex justify-between items-start z-10">
                <span className="text-xs text-muted-foreground font-medium">
                  {product.pricing_type === "fixed"
                    ? t("pricingType.fixed")
                    : t("pricingType.calculated")}
                </span>
                {product.lowest_price !== null && (
                  <span className="text-xs font-bold text-primary">
                    {t("currency")} {product.lowest_price}
                  </span>
                )}
              </div>

              {product.image_url && (
                <div className="absolute inset-y-0 end-0 w-2/5 flex items-center justify-center p-2 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative w-full h-3/4">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

              <div className="z-10 max-w-[60%]">
                <h3 className="text-base sm:text-lg font-bold text-black group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-[#6B6B80] line-clamp-2 mt-1">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center text-muted-foreground py-16 rounded-3xl bg-white border">
          <p className="text-base font-medium">{t("empty")}</p>
        </div>
      )}
    </section>
  );
}
