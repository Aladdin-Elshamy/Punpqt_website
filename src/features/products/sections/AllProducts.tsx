import businessCardsImage from "@/assets/images/business-card.png";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import ProductCard from "../components/ProductCard";

export default function AllProducts() {
  const t = useTranslations("AllProducts");

  return (
    <div className="container mt-14 mb-28 mx-auto px-6 md:px-8 lg:px-6">
      <Badge className=" bg-[#e8f4f4] text-base h-12 px-4 border-[#0D73771A] text-black gap-2 font-medium [&>svg]:size-4! ">
        {t("badge")}
      </Badge>
      <div
        className="grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-4
         mt-5"
      >
        <ProductCard
          image={businessCardsImage}
          title={t("products.businessCards.title")}
          description={t("products.businessCards.description")}
          printers={t("products.businessCards.printers")}
          products={t("products.businessCards.products")}
        />
        <ProductCard
          image={businessCardsImage}
          title={t("products.businessCards.title")}
          description={t("products.businessCards.description")}
          printers={t("products.businessCards.printers")}
          products={t("products.businessCards.products")}
        />
        <ProductCard
          image={businessCardsImage}
          title={t("products.businessCards.title")}
          description={t("products.businessCards.description")}
          printers={t("products.businessCards.printers")}
          products={t("products.businessCards.products")}
        />
        <ProductCard
          image={businessCardsImage}
          title={t("products.businessCards.title")}
          description={t("products.businessCards.description")}
          printers={t("products.businessCards.printers")}
          products={t("products.businessCards.products")}
        />
        <ProductCard
          image={businessCardsImage}
          title={t("products.businessCards.title")}
          description={t("products.businessCards.description")}
          printers={t("products.businessCards.printers")}
          products={t("products.businessCards.products")}
        />
      </div>
    </div>
  );
}
