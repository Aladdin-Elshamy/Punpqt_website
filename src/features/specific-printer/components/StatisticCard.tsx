import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

export interface StatisticCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export default function StatisticCard({
  title,
  value,
  description,
  icon: Icon,
}: StatisticCardProps) {
  return (
    <Card className="gap-0 rounded-3xl border-0 bg-primary/10 py-0 shadow-none ring-0">
      <CardContent className="p-5 font-semibold">
        <div className="flex items-center gap-2 text-primary">
          <Icon className="size-5 shrink-0" />
          <h3 className="text-base ">{title}</h3>
        </div>

        <p className="mt-2.5 text-xl text-black">{value}</p>
        <p className="text-base text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}