import { Badge } from "@/components/ui/badge";
import TrendUp from "@/shared/icons/TrendUp";
import PopularProduct from "../components/PopularProduct";
import { useTranslations } from "next-intl";
import type { Product } from "../models/products.model";

export default function PopularProducts({
  products,
}: {
  products?: Product[];
}) {
  const t = useTranslations("PopularProducts.productSection");
  const productList = products ?? [];

  if (productList.length === 0) {
    return null;
  }

  return (
    <div className="container sm:mt-0 mx-auto px-6 md:px-8 lg:px-6">
      <Badge className="text-base h-12 px-4 border-[#0D73771A] text-black gap-2 font-medium [&>svg]:size-4!">
        <TrendUp className="text-primary" /> {t("badge")}
      </Badge>
      <div
        className="grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        mt-5"
      >
        {productList.map((product) => (
          <PopularProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
