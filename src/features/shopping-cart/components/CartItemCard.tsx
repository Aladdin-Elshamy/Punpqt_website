"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DesignUploadChoice from "@/features/specification/components/DesignUploadChoice";
import { cn } from "@/lib/utils";
import { Box, Clock, FileBox, Trash2 } from "lucide-react";
import { useId, useState } from "react";

interface CartItemCardProps {
  itemNumber: number;
  title: string;
  printerName: string;
  price: string;
  specifications: string[];
  deliveryEstimate: string;
}

export default function CartItemCard({
  itemNumber,
  title,
  printerName,
  price,
  specifications,
  deliveryEstimate,
}: CartItemCardProps) {
  const [designOption, setDesignOption] = useState(
    "printer",
  );
  const radioGroupId = useId();

  return (
    <Card className="gap-0 rounded-2xl border-border/80 py-0 shadow-sm relative z-10 bg-white">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <Badge
            variant="secondary"
            className="rounded-full px-2 h-6 text-muted-foreground"
          >
            #{itemNumber}
          </Badge>
          <p className="text-base font-bold text-primary">{price}</p>
        </div>

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
                variant="ghost"
                size="icon-sm"
                aria-label={`Remove ${title} from cart`}
                className="shrink-0 text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="size-4" />
              </Button>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {specifications.map((specification) => (
                <Badge
                  key={specification}
                  variant="secondary"
                  className={cn(
                    "rounded-md px-2 py-1 font-semibold text-muted-foreground",
                    specification === deliveryEstimate &&
                    "bg-primary/10 text-primary",
                  )}
                >
                  {specification === deliveryEstimate && (
                    <Clock className="size-3" strokeWidth={1.5} />
                  )}
                  <span className="trim">{specification}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <fieldset className="mt-5 rounded-xl font-semibold bg-primary/10 px-4 ps-4 sm:ps-16 py-3">
          <legend className="sr-only">Design file preference</legend>
          <p className="text-xs text-foreground">
            Will you upload design files for this product after payment?
          </p>

          <label className="mt-2 flex cursor-pointer items-center gap-2 text-xs text-muted-foreground">
            <input
              type="radio"
              name={radioGroupId}
              value="upload"
              checked={designOption === "upload"}
              onChange={() => setDesignOption("upload")}
              className="size-3.5 accent-primary border-4 border-primary"
            />
            {"Yes, I'll upload my design files after payment."}
          </label>

          <label className="mt-4 flex cursor-pointer items-center gap-2 text-xs text-muted-foreground">
            <input
              type="radio"
              name={radioGroupId}
              value="printer"
              checked={designOption === "printer"}
              onChange={() => setDesignOption("printer")}
              className="size-3.5 accent-primary"
            />
            No, I need the printer to create the design for me.
          </label>
        </fieldset>
      </CardContent>
    </Card>
  );
}