"use client";

import CheckoutOrderSummary from "@/features/checkout/components/CheckoutOrderSummary";
import CheckoutStepper, {
  type CheckoutStep,
} from "@/features/checkout/components/CheckoutStepper";
import ReviewOrderCard from "@/features/checkout/components/ReviewOrderCard";
import UploadFilesView from "@/features/checkout/components/UploadFilesView";
import { CHECKOUT_PRODUCTS } from "@/features/checkout/checkout.data";
import type { CheckoutProduct } from "@/features/checkout/checkout.types";
import BreadcrumbBasic from "@/shared/components/BreadCrumb";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Checkout() {
  const tHome = useTranslations("ProductsHero.breadcrumb");
  const tNav = useTranslations("Navbar.menu");
  const tCheckout = useTranslations("Checkout");

  const [activeStep, setActiveStep] = useState<CheckoutStep>("review");
  const [products, setProducts] =
    useState<CheckoutProduct[]>(CHECKOUT_PRODUCTS);

  const handleFileChange = (productId: string, filesCount: number) => {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId ? { ...product, filesCount } : product,
      ),
    );
  };

  const selectedFileCount = products.filter(
    (product) => product.filesCount > 0,
  ).length;

  return (
    <section className="container 2xl:px-0 2xl:w-full mt-36 mx-auto mb-16 md:px-8 lg:mb-32 lg:px-6">
      <BreadcrumbBasic
        links={[
          { label: tHome("home"), url: "/" },
          { label: tNav("shoppingCart"), url: "/shopping-cart" },
          { label: tCheckout("title"), url: "/shopping-cart/checkout" },
        ]}
      />

      <div className="mt-10">
        <CheckoutStepper activeStep={activeStep} />
      </div>

      <div className="mt-7 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem]">
        {activeStep === "review" ? (
          <ReviewOrderCard
            products={products}
            onContinue={() => setActiveStep("upload")}
          />
        ) : (
          <UploadFilesView
            products={products}
            selectedFileCount={selectedFileCount}
            onFileChange={handleFileChange}
            onSkip={() => setActiveStep("review")}
          />
        )}

        <aside className="lg:sticky lg:top-28">
          <CheckoutOrderSummary
            products={products}
            showFileStatus={activeStep === "upload"}
          />
        </aside>
      </div>
    </section>
  );
}