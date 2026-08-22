import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface CartSpecificationBadgesProps {
  specifications: string[];
  deliveryEstimate: string;
}

export default function CartSpecificationBadges({
  specifications,
  deliveryEstimate,
}: CartSpecificationBadgesProps) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {specifications.map((specification) => {
        const isDeliveryEstimate = specification === deliveryEstimate;

        return (
          <Badge
            key={specification}
            variant="secondary"
            className={cn(
              "rounded-md px-2 py-1 font-semibold text-muted-foreground",
              isDeliveryEstimate && "bg-primary/10 text-primary",
            )}
          >
            {isDeliveryEstimate && <Clock className="size-3" strokeWidth={1.5} />}
            <span className="trim">{specification}</span>
          </Badge>
        );
      })}
    </div>
  );
}