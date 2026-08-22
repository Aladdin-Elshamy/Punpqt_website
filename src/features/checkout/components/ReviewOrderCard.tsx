import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Upload } from "lucide-react";
import type { CheckoutProduct } from "./CheckoutOrderSummary";

interface ReviewOrderCardProps {
  products: CheckoutProduct[];
  onContinue: () => void;
}

const specifications: Record<string, string> = {
  "business-cards": "Matt 400gsm · Gloss Lamination",
  flyers: "Coated 350gsm · None",
};

const printers: Record<string, string> = {
  "business-cards": "Elite Printing Co.",
  flyers: "Premium Print Hub",
};

export default function ReviewOrderCard({
  products,
  onContinue,
}: ReviewOrderCardProps) {
  return (
    <Card className="gap-0 rounded-3xl border border-border/80 py-0 shadow-sm ring-0 relative z-10">
      <CardContent className="p-6 sm:p-7">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Review Order
        </h1>

        <div className="mt-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className={index ? "border-t border-border/80 pt-5" : ""}
            >
              <div className="flex gap-4 py-1">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-muted">
                  <FileText className="size-5 text-muted-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between gap-3">
                    <h2 className="font-semibold text-black text-base">{product.title}</h2>
                    <p className="shrink-0 font-semibold text-black">
                      {product.price}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground font-semibold">
                    {specifications[product.id]}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">
                    {product.quantity} · by {printers[product.id]}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/10 p-5">
          <div className="flex gap-3">
            <Upload className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <h2 className="font-semibold text-primary">
                Design files uploaded after payment
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-semibold">
                {"After your payment is secured in escrow, you'll upload your "}
                design files directly to each printer before production begins.
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