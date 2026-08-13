"use client";

import Breadcrumb from "@/shared/components/BreadCrumb";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Banner from "../components/Banner";

const SUPPORTED_PRODUCTS = [
  "business-cards",
  "flyers",
  "packaging",
  "brochures",
] as const;

type SupportedProduct = (typeof SUPPORTED_PRODUCTS)[number];

function getSupportedProduct(product: string | string[] | undefined): SupportedProduct {
  const productSlug = Array.isArray(product) ? product[0] : product;

  return SUPPORTED_PRODUCTS.includes(productSlug as SupportedProduct)
    ? (productSlug as SupportedProduct)
    : "business-cards";
}

export default function ProductsHero() {
  const { product } = useParams();
  const productKey = getSupportedProduct(product);
  const t = useTranslations("SpecificProduct.hero");

  return (
    <div className="container 2xl:px-0 2xl:w-full flex justify-center sm:block flex-col sm:mt-36 mx-auto md:px-8 lg:px-6 h-[calc(100vh-75px)] sm:h-auto pb-0 sm:pb-16">
      <div className="flex items-center gap-2.5">
        <Breadcrumb
          links={[
            {
              label: t("breadcrumb.home"),
              url: "/",
            },
            {
              label: t("breadcrumb.allProducts"),
              url: "/products",
            },
            {
              label: t(`products.${productKey}.title`),
              url: `/products/${productKey}`,
            },
          ]}
        />
      </div>
      <Banner>
        <div className="flex-1">
          <h1 className="text-xl font-semibold">
            {t(`products.title`)}
          </h1>
          <p className="mt-1 text-muted-foreground text-balance max-w-md text-sm font-semibold">
            {t(`products.description`)}
          </p>
          <div className="flex items-center gap-4 font-semibold text-sm mt-4">
            <span className="text-primary">
              {t("stats.products", { count: 6 })}
            </span>
            <span className="text-muted-foreground">
              {t("stats.printers", { count: 3 })}
            </span>
          </div>
        </div>
      </Banner>
    </div>
  );
}