import { Badge } from "@/components/ui/badge";
import type { CheckoutProduct } from "@/features/checkout/checkout.types";
import { PackageCheck } from "lucide-react";

interface SuccessProductChipsProps {
  products: CheckoutProduct[];
}

export default function SuccessProductChips({
  products,
}: SuccessProductChipsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {products.map((product) => (
        <Badge
          key={product.id}
          variant="secondary"
          className="h-8 rounded-full bg-background px-4 text-sm font-medium gap-2 text-muted-foreground shadow-xs"
        >
          <PackageCheck className="size-3.5 text-primary" strokeWidth={1.8} />
          <span className="trim">{product.title}</span>
        </Badge>
      ))}
    </div>
  );
}