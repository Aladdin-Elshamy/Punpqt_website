import { Button } from "@/components/ui/button";
import Heading from "../components/Heading";
import ArrowRight from "@/shared/icons/ArrowRight";
import ProductCategory from "../components/ProductCategory";
import { useTranslations } from "next-intl";
import Link from "next/link";
import type { Product } from "../models/products.model";

export default function BrowseByProducts({
  products,
}: {
  products?: Product[];
}) {
  const t = useTranslations("BrowseByProducts");
  const productList = products ?? [];

  return (
    <div className="container px-6 md:px-8 lg:px-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16">
          {productList.map((product) => (
            <ProductCategory key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-muted-foreground py-12 rounded-2xl bg-white border">
          <p className="text-base font-medium">{t("empty")}</p>
        </div>
      )}
    </div>
  );
}
