"use client";

import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";
import type { CustomRFQProductTypeId } from "@/features/custom-rfq/custom-rfq.data";

import ProductTypeOptions from "../components/ProductTypeOptions";

type Props = {
  selectedProduct: CustomRFQProductTypeId;
  onSelect: (productType: CustomRFQProductTypeId) => void;
};

export default function CustomRFQProductType({
  selectedProduct,
  onSelect,
}: Props) {
  const t = useTranslations("CustomRFQ.productType");

  return (
    <section aria-labelledby="product-type-heading">
      <Card className="rounded-3xl border p-5! ring-0 sm:p-7! lg:p-7.5!">
        <h2 id="product-type-heading" className="text-2xl font-semibold text-foreground sm:text-3xl">
          {t("title")}
        </h2>
        <p className="text-sm font-medium tracking-wide text-muted-foreground">
          {t("description")}
        </p>
        <ProductTypeOptions selectedProduct={selectedProduct} onSelect={onSelect} />
      </Card>
    </section>
  );
}