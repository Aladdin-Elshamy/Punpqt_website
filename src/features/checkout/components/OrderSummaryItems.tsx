import { CHECKOUT_TOTALS } from "../checkout.data";
import type { CheckoutProduct } from "../checkout.types";

interface OrderSummaryItemsProps {
  products: CheckoutProduct[];
}

export default function OrderSummaryItems({ products }: OrderSummaryItemsProps) {
  return (
    <>
      <dl className="mt-5 space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-start justify-between gap-4 text-sm"
          >
            <div>
              <dt className="font-semibold text-muted-foreground">
                {product.title}
              </dt>
              <dd className="mt-1 text-xs font-semibold text-muted-foreground">
                {product.quantity}
              </dd>
            </div>
            <dd className="shrink-0 font-semibold text-foreground">
              {product.price}
            </dd>
          </div>
        ))}

        <div className="flex items-center justify-between gap-4 text-sm">
          <dt className="font-semibold text-muted-foreground">Delivery</dt>
          <dd className="font-semibold text-foreground">
            {CHECKOUT_TOTALS.delivery}
          </dd>
        </div>
      </dl>

      <div className="my-5 border-t border-border/80" />

      <div className="flex items-center justify-between gap-4">
        <p className="font-semibold text-foreground">Total</p>
        <p className="text-lg font-semibold text-primary">
          {CHECKOUT_TOTALS.total}
        </p>
      </div>
    </>
  );
}