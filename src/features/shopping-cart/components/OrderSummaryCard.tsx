import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CartOrderTotals } from "../shopping-cart.types";
import OrderProtectionList from "./OrderProtectionList";
import OrderSummaryAmounts from "./OrderSummaryAmounts";
import { ArrowRight } from "lucide-react";

interface OrderSummaryCardProps {
  itemCount: number;
  totals: CartOrderTotals;
}

export default function OrderSummaryCard({
  itemCount,
  totals,
}: OrderSummaryCardProps) {
  return (
    <Card className="gap-0 rounded-2xl border border-border/80 py-0 shadow-sm ring-0">
      <CardContent className="p-4">
        <h2 className="text-sm font-semibold text-foreground">Order Summary</h2>
        <OrderSummaryAmounts itemCount={itemCount} totals={totals} />

        <Button className="mt-6 h-11 w-full rounded-xl text-sm font-medium">
          Proceed to Checkout
          <ArrowRight className="size-4" />
        </Button>

        <OrderProtectionList />
      </CardContent>
    </Card>
  );
}