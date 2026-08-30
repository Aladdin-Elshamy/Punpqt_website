import { Button } from "@/components/ui/button";
import Heading from "../components/Heading";
import ArrowRight from "@/shared/icons/ArrowRight";
import ProductCategory from "../components/ProductCategory";
import businessCardsImage from "@/assets/images/business-card.png";
import { useTranslations } from "next-intl";

export default function BrowseByProducts() {
  const t = useTranslations("BrowseByProducts");

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
        >
          {t("allProducts")}
          <ArrowRight className={`rtl:scale-x-[-1] ms-2`} />
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16">
        <ProductCategory
          title={"asd"}
          description={"asasdasdasdd"}
          src={businessCardsImage}
        />
        <ProductCategory
          title={"asd"}
          description={"asasdasdasdd"}
          src={businessCardsImage}
        />
        <ProductCategory
          title={"asd"}
          description={"asasdasdasdd"}
          src={businessCardsImage}
        />
        <ProductCategory
          title={"asd"}
          description={"asasdasdasdd"}
          src={businessCardsImage}
        />
      </div>
    </div>
  );
}
