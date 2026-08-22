import type { CartOrderTotals } from "../shopping-cart.types";

interface OrderSummaryAmountsProps {
  itemCount: number;
  totals: CartOrderTotals;
}

export default function OrderSummaryAmounts({
  itemCount,
  totals,
}: OrderSummaryAmountsProps) {
  return (
    <>
      <dl className="mt-4 space-y-3 text-sm font-semibold">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-muted-foreground">
            Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
          </dt>
          <dd className="text-foreground">{totals.subtotal}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-muted-foreground">Delivery</dt>
          <dd className="text-foreground">{totals.delivery}</dd>
        </div>
      </dl>

      <p className="mt-2 text-xs font-semibold leading-relaxed text-muted-foreground">
        Free delivery on orders over EGP 2,000
      </p>

      <div className="my-4 border-t border-border/80" />

      <div className="flex items-center justify-between gap-4 font-semibold">
        <p className="text-base text-foreground">Total</p>
        <p className="text-lg text-primary">{totals.total}</p>
      </div>
    </>
  );
}