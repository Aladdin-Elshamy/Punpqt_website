import { Separator } from "@/components/ui/separator";
import { Truck } from "lucide-react";

export default function DeliveryNotice() {
  return (
    <div className="space-y-3">
      <Separator />
      <div className="flex items-start gap-3">
        <Truck className="mt-0.5 size-5 shrink-0 text-primary" />
        <div>
          <p className="text-xs font-bold">
            Estimated delivery: June 4–5, 2026
          </p>
          <p className="mt-0.5 text-[10px] font-medium text-muted-foreground">
            2–3 business days from order confirmation
          </p>
        </div>
      </div>
    </div>
  );
}