import { Badge } from "@/components/ui/badge";
import TrendUp from "@/shared/icons/TrendUp";
import PopularProduct from "../components/PopularProduct";
import businessCardsImage from "@/assets/images/business-card.png";
import flyersImage from "@/assets/images/flyers.png";
import boxesImage from "@/assets/images/box.png";
import brochuresImage from "@/assets/images/brochures.png";
import { useTranslations } from "next-intl";

export default function PopularProducts() {
  const t = useTranslations("PopularProducts.productSection");

  return (
    <div className="container sm:mt-0 mx-auto px-6 md:px-8 lg:px-6">
      <Badge className="text-base h-12 px-4 border-[#0D73771A] text-black gap-2 font-medium [&>svg]:size-4! ">
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
        <PopularProduct
          image={businessCardsImage}
          title={"Business Cards"}
          description={"Standard sizes, premium paper, and finishes."}
          link="/products/business-cards"
        />
        <PopularProduct
          image={flyersImage}
          title={"Flyers"}
          description={"Various sizes, paper types, and finishes."}
          link="/products/flyers"
        />
        <PopularProduct
          image={brochuresImage}
          title={"Brochures"}
          description={"Standard sizes, premium paper, and finishes."}
          link="/products/brochures"
        />
        <PopularProduct
          image={boxesImage}
          title={"Packaging"}
          description={"Custom sizes, materials, and finishes."}
          link="/products/packaging"
        />
      </div>
    </div>
  );
}
