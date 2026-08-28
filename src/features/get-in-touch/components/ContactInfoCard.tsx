import { Card, CardContent } from "@/components/ui/card";

import type { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export default function ContactInfoCard({
  label,
  value,
  description,
  icon: Icon,
}: ContactInfoCardProps) {
  return (
    <Card className="h-full gap-0 rounded-3xl border border-black/6 bg-white py-0 shadow-xs ring-0">
      <CardContent className="flex min-h-30 gap-4 p-5 sm:p-6">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-2xl bg-[#E8F4F4] text-primary">
          <Icon className="size-4" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            {label}
          </p>
          <h2 className="mt-1 text-sm font-semibold text-foreground">{value}</h2>
          <p className="mt-2 text-xs leading-5 font-semibold text-muted-foreground">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
