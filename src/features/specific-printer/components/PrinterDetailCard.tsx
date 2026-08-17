import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface PrinterDetailCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  highlighted?: boolean;
}

export default function PrinterDetailCard({
  title,
  description,
  icon: Icon,
  highlighted = false,
}: PrinterDetailCardProps) {
  return (
    <article
      className={cn(
        "flex min-h-14 items-center rounded-2xl bg-muted/50 px-4 py-3",
        Icon && "gap-3",
        highlighted && "bg-primary/5",
      )}
    >
      {Icon && <Icon className="size-5 shrink-0 text-primary" />}

      <div className="min-w-0">
        <h3 className="text-sm font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}