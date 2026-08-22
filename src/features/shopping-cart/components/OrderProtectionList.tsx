import Shield from "@/shared/icons/Shield";
import { Truck } from "lucide-react";

export default function OrderProtectionList() {
  return (
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
  );
}