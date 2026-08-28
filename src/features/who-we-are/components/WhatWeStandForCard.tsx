import { Card, CardContent } from "@/components/ui/card";

import type { LucideIcon } from "lucide-react";

interface WhatWeStandForCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function WhatWeStandForCard({
  title,
  description,
  icon: Icon,
}: WhatWeStandForCardProps) {
  return (
    <Card className="gap-0 rounded-3xl border border-black/6 bg-white py-0 shadow-xs ring-0">
      <CardContent className="p-5 sm:p-6">
        <div className="flex size-9 items-center justify-center rounded-2xl bg-[#E8F4F4] text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 font-semibold text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
