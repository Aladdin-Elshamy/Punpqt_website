import { Button } from "@/components/ui/button";
import { Box, Trash2 } from "lucide-react";
import type { ReactNode } from "react";

interface CartItemDetailsProps {
  title: string;
  printerName: string;
  onRemove: () => void;
  children: ReactNode;
}

export default function CartItemDetails({
  title,
  printerName,
  onRemove,
  children,
}: CartItemDetailsProps) {
  return (
    <div className="mt-3 flex gap-3 sm:gap-4">
      <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#F4F4F6] sm:size-16">
        <Box className="size-6 text-muted-foreground" strokeWidth={1.4} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-sm font-bold text-foreground sm:text-base">
              {title}
            </h2>
            <p className="mt-1 text-xs font-medium text-muted-foreground">
              by {printerName}
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            aria-label={`Remove ${title} from cart`}
            onClick={onRemove}
            className="shrink-0 text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>

        {children}
      </div>
    </div>
  );
}