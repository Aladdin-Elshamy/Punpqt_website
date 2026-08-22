"use client";

import { Button } from "@/components/ui/button";
import CheckoutOrderSummary, {
  type CheckoutProduct,
} from "@/features/checkout/components/CheckoutOrderSummary";
import CheckoutStepper, {
  type CheckoutStep,
} from "@/features/checkout/components/CheckoutStepper";
import DesignFileUploadCard from "@/features/checkout/components/DesignFileUploadCard";
import ReviewOrderCard from "@/features/checkout/components/ReviewOrderCard";
import BreadcrumbBasic from "@/shared/components/BreadCrumb";
import Check from "@/shared/icons/Check";
import { Upload } from "lucide-react";
import { useState } from "react";

const initialProducts: CheckoutProduct[] = [
  {
    id: "business-cards",
    title: "Premium Business Cards",
    quantity: "500 pcs",
    price: "EGP 180",
    filesCount: 0,
  },
  {
    id: "flyers",
    title: "A5 Promotional Flyers",
    quantity: "1,000 pcs",
    price: "EGP 360",
    filesCount: 0,
  },
];

const uploadDetails = {
  "business-cards": {
    specification: "Matt 400gsm · Gloss Lamination",
    printer: "Elite Printing Co.",
  },
  flyers: {
    specification: "Coated 350gsm · None",
    printer: "Premium Print Hub",
  },
};

export default function Checkout() {
  const [activeStep, setActiveStep] = useState<CheckoutStep>("review");
  const [products, setProducts] = useState(initialProducts);

  const handleFileChange = (productId: string, filesCount: number) => {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId ? { ...product, filesCount: filesCount } : product,
      ),
    );
  };

  const selectedFileCount = products.filter(
    (product) => product.filesCount > 0,
  ).length;

  return (
    <section className="container 2xl:px-0 2xl:w-full mt-36 mx-auto md:px-8 lg:px-6 mb-16 lg:mb-32">
      <BreadcrumbBasic
        links={[
          { label: "Home", url: "/" },
          { label: "Shopping Cart", url: "/shopping-cart" },
          { label: "Checkout", url: "/shopping-cart/checkout" },
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
          <div>
            <div className="flex max-w-2xl gap-3 items-center rounded-2xl border border-primary/20 bg-primary/10 px-5 py-4">
              <span className="flex items-center justify-center rounded-full bg-primary p-2 text-white">
                <Check className="size-5 text-white" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">
                  Payment secured — EGP 620 in escrow
                </p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">
                  Now upload your design files so printers can start reviewing.
                </p>
              </div>
            </div>
            <div className="rounded-3xl mt-7.5 border border-border/80 bg-card relative z-10 p-5 shadow-sm sm:p-7">
              <h1 className="text-3xl font-semibold tracking-tight text-black">
                Upload Design Files
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground font-semibold">
                Upload your print-ready files for each item. Your printers will
                review them and prepare proofs before production.
              </p>

              <div className="mt-6 grid gap-5">
                {products.map((product) => {
                  const details = uploadDetails[
                    product.id as keyof typeof uploadDetails
                  ];

                  return (
                    <DesignFileUploadCard
                      key={product.id}
                      product={product}
                      specification={details.specification}
                      printer={details.printer}
                      onFileChange={handleFileChange}
                    />
                  );
                })}
              </div>

              <p className="mt-6 text-center text-xs text-muted-foreground font-semibold">
                {"Don't have files ready?"}{" "}
                <button
                  type="button"
                  onClick={() => setActiveStep("review")}
                  className="text-primary underline underline-offset-2"
                >
                  Skip for now
                </button>{" "}
                — you can upload from your order page later.
              </p>

              <Button
                type="button"
                disabled={selectedFileCount === 0}
                className="mt-5 h-12 w-full rounded-xl text-sm font-semibold disabled:bg-[#EBEBEE] disabled:opacity-100 disabled:text-muted-foreground"
              >
                {selectedFileCount > 0 && <Upload className="size-4" />}
                Send Files to Printers
              </Button>
            </div>
          </div>
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