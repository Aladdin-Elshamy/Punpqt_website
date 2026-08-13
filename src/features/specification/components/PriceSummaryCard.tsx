import { Card } from "@/components/ui/card";

export default function PriceSummaryCard() {
  return (
    <Card className="gap-0 rounded-2xl border-primary/15 bg-primary/8 px-4 py-4 shadow-none ring-primary/15">
      <p className="text-xs font-semibold text-muted-foreground">Start From</p>

      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <div className="flex items-end gap-2">
          <p className="text-3xl font-bold leading-none text-primary">
            EGP 180
          </p>
          <p className="text-xs font-medium text-muted-foreground">
            for 500 pcs
          </p>
        </div>

        <p className="text-xs font-semibold text-muted-foreground">
          = EGP 0.36 / pc
        </p>
      </div>
    </Card>
  );
}