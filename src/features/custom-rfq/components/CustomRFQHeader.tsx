import { FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type CustomRFQHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export default function CustomRFQHeader({
  badge,
  title,
  description,
}: CustomRFQHeaderProps) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <Badge className="h-8 gap-1.5 px-5 font-semibold">
        <FileText className="size-3" />
        <span className="trim">{badge}</span>
      </Badge>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm font-medium text-muted-foreground">
        {description}
      </p>
    </header>
  );
}