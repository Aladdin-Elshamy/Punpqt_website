import { FileText } from "lucide-react";
import type { CheckoutProduct, ProductUploadDetails } from "../checkout.types";

interface ReviewOrderItemProps {
  product: CheckoutProduct;
  details: ProductUploadDetails;
  showDivider: boolean;
}

export default function ReviewOrderItem({
  product,
  details,
  showDivider,
}: ReviewOrderItemProps) {
  return (
    <article className={showDivider ? "border-t border-border/80 pt-5" : ""}>
      <div className="flex gap-4 py-1">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-muted">
          <FileText className="size-5 text-muted-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex justify-between gap-3">
            <h2 className="text-base font-semibold text-black">
              {product.title}
            </h2>
            <p className="shrink-0 font-semibold text-black">
              {product.price}
            </p>
          </div>
          <p className="mt-2 text-sm font-semibold text-muted-foreground">
            {details.specification}
          </p>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            {product.quantity} · by {details.printer}
          </p>
        </div>
      </div>
    </article>
  );
}