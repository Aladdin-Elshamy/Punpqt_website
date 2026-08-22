import { Card, CardContent } from "@/components/ui/card";
import type { CheckoutProduct } from "../checkout.types";
import OrderFileStatus from "./OrderFileStatus";
import OrderProtectionList from "./OrderProtectionList";
import OrderSummaryItems from "./OrderSummaryItems";

interface CheckoutOrderSummaryProps {
  products: CheckoutProduct[];
  showFileStatus?: boolean;
}

export default function CheckoutOrderSummary({
  products,
  showFileStatus = false,
}: CheckoutOrderSummaryProps) {
  return (
    <Card className="gap-0 rounded-2xl border border-border/80 bg-white py-0 shadow-sm ring-0">
      <CardContent className="p-5">
        <h2 className="text-base font-semibold text-black">Order Summary</h2>
        <OrderSummaryItems products={products} />
        {showFileStatus && <OrderFileStatus products={products} />}
        <OrderProtectionList />
      </CardContent>
    </Card>
  );
}