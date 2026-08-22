import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCT_UPLOAD_DETAILS } from "../checkout.data";
import type { CheckoutProduct } from "../checkout.types";
import ReviewOrderItem from "./ReviewOrderItem";
import { ArrowRight, Upload } from "lucide-react";

interface ReviewOrderCardProps {
  products: CheckoutProduct[];
  onContinue: () => void;
}

export default function ReviewOrderCard({
  products,
  onContinue,
}: ReviewOrderCardProps) {
  return (
    <Card className="relative z-10 gap-0 rounded-3xl border border-border/80 py-0 shadow-sm ring-0">
      <CardContent className="p-6 sm:p-7">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Review Order
        </h1>

        <div className="mt-8">
          {products.map((product, index) => {
            const details = PRODUCT_UPLOAD_DETAILS[product.id];

            if (!details) {
              return null;
            }

            return (
              <ReviewOrderItem
                key={product.id}
                product={product}
                details={details}
                showDivider={index > 0}
              />
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/10 p-5">
          <div className="flex gap-3">
            <Upload className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <h2 className="font-semibold text-primary">
                Design files uploaded after payment
              </h2>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-muted-foreground">
                {
                  "After your payment is secured in escrow, you'll upload your design files directly to each printer before production begins."
                }
              </p>
            </div>
          </div>
        </div>

        <Button
          type="button"
          onClick={onContinue}
          className="mt-7 h-12 w-full rounded-xl text-sm font-medium"
        >
          Continue to Upload Files
          <ArrowRight className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
}