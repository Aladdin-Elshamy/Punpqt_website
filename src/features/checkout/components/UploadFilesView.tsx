"use client";

import { Button } from "@/components/ui/button";
import { CHECKOUT_TOTALS, PRODUCT_UPLOAD_DETAILS } from "../checkout.data";
import type { CheckoutProduct } from "../checkout.types";
import DesignFileUploadCard from "./DesignFileUploadCard";
import PaymentSecuredNotice from "./PaymentSecuredNotice";
import { Upload } from "lucide-react";
import { useTranslations } from "next-intl";

interface UploadFilesViewProps {
  products: CheckoutProduct[];
  selectedFileCount: number;
  onFileChange: (productId: string, filesCount: number) => void;
  onSkip: () => void;
}

export default function UploadFilesView({
  products,
  selectedFileCount,
  onFileChange,
  onSkip,
}: UploadFilesViewProps) {
  const t = useTranslations("Checkout.upload");

  return (
    <div>
      <PaymentSecuredNotice total={CHECKOUT_TOTALS.total} />

      <div className="relative z-10 mt-7.5 rounded-3xl border border-border/80 bg-card p-5 shadow-sm sm:p-7">
        <h1 className="text-3xl font-semibold tracking-tight text-black">
          {t("title")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm font-semibold leading-relaxed text-muted-foreground">
          {t("description")}
        </p>

        <div className="mt-6 grid gap-5">
          {products.map((product) => {
            const details = PRODUCT_UPLOAD_DETAILS[product.id];

            if (!details) {
              return null;
            }

            return (
              <DesignFileUploadCard
                key={product.id}
                product={product}
                specification={details.specification}
                printer={details.printer}
                onFileChange={onFileChange}
              />
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs font-semibold text-muted-foreground">
          <button
            type="button"
            onClick={onSkip}
            className="text-primary underline underline-offset-2"
          >
            {t("skipAndOrder")}
          </button>
        </p>

        <Button
          type="button"
          disabled={selectedFileCount === 0}
          className="mt-5 h-12 w-full rounded-xl text-sm font-semibold disabled:bg-[#EBEBEE] disabled:text-muted-foreground disabled:opacity-100"
        >
          {selectedFileCount > 0 && <Upload className="size-4" />}
          {t("proceedToPayment")}
        </Button>
      </div>
    </div>
  );
}