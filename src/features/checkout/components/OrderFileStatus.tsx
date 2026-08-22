import Check from "@/shared/icons/Check";
import type { CheckoutProduct } from "../checkout.types";

interface OrderFileStatusProps {
  products: CheckoutProduct[];
}

export default function OrderFileStatus({ products }: OrderFileStatusProps) {
  return (
    <>
      <div className="my-5 border-t border-border/80" />
      <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
        Files
      </p>
      <ul className="mt-3 grid gap-2">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex items-center justify-between gap-3 text-sm font-semibold"
          >
            <div className="flex items-center gap-1.5 text-foreground">
              {product.filesCount > 0 ? (
                <span className="flex items-center justify-center rounded-full bg-primary p-1 text-white">
                  <Check className="size-2.5 text-white" />
                </span>
              ) : (
                <span className="flex size-4 items-center justify-center rounded-full bg-muted-foreground text-white" />
              )}
              {product.title}
            </div>
            <span className="font-normal text-primary">
              {product.filesCount > 0 ? `${product.filesCount} files` : "—"}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}