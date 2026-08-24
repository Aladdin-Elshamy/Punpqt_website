import { useTranslations } from "next-intl";

import {
  CUSTOM_RFQ_PRODUCT_TYPES,
  type CustomRFQProductTypeId,
} from "@/features/custom-rfq/custom-rfq.data";
import { cn } from "@/lib/utils";
import ProductCard from "@/shared/components/ProductCard";

type ProductTypeOptionsProps = {
  selectedProduct: CustomRFQProductTypeId;
  onSelect: (product: CustomRFQProductTypeId) => void;
};

export default function ProductTypeOptions({
  selectedProduct,
  onSelect,
}: ProductTypeOptionsProps) {
  const t = useTranslations("CustomRFQ.productType");

  return (
    <div
      className="mt-6 grid grid-cols-1 grid-rows-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-4"
      role="radiogroup"
      aria-label={t("title")}
    >
      {CUSTOM_RFQ_PRODUCT_TYPES.map((product) => {
        const productPath = `products.${product.id}`;
        const isSelected = selectedProduct === product.id;

        return (
          <button
            key={product.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelect(product.id)}
            className="h-full rounded-2xl text-start outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <ProductCard
              image={product.image}
              title={t(`${productPath}.title`)}
              description={t(`${productPath}.description`)}
              printers={t(`${productPath}.printers`)}
              className={cn(
                "h-full",
                isSelected
                  ? "border-primary bg-[#E7F1F2] shadow-[0_0_0_1px_var(--primary)]"
                  : "hover:border-primary/40 hover:bg-muted/30",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}