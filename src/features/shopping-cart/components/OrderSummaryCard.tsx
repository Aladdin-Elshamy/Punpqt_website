import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Shield from "@/shared/icons/Shield";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

interface OrderSummaryCardProps {
  subtotal: string;
  delivery: string;
  total: string;
}

export default function OrderSummaryCard({
  subtotal,
  delivery,
  total,
}: OrderSummaryCardProps) {
  return (
    <Card className="gap-0 rounded-2xl border-border/80 py-0 shadow-sm">
      <CardContent className="p-4">
        <h2 className="text-sm font-semibold text-foreground">Order Summary</h2>

        <dl className="mt-4 space-y-3 text-sm font-semibold">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-muted-foreground">
              Subtotal (3 items)
            </dt>
            <dd className="text-foreground">{subtotal}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-muted-foreground">Delivery</dt>
            <dd className="text-foreground">{delivery}</dd>
          </div>
        </dl>

        <p className="mt-2 text-xs font-semibold leading-relaxed text-muted-foreground">
          Free delivery on orders over EGP 2,000
        </p>

        <div className="my-4 border-t border-border/80" />

        <div className="flex items-center font-semibold justify-between gap-4">
          <p className="text-base text-foreground">Total</p>
          <p className="text-lg text-primary">{total}</p>
        </div>

        <Button className="mt-6 h-11 w-full rounded-xl text-sm font-medium">
          Proceed to Checkout
          <ArrowRight className="size-4" />
        </Button>

        <div className="mt-5 grid gap-3 font-semibold">
          <p className="flex items-start gap-2 text-xs text-muted-foreground">
            <Shield className="size-4 shrink-0 text-primary" />
            Escrow protected — funds held until delivery confirmed
          </p>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Truck className="size-4 shrink-0 text-primary" />
            Sample approval before production begins
          </p>
        </div>
      </CardContent>
    </Card>
  );
}