"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { CartDesignOption, CartItem } from "../shopping-cart.types";
import CartDesignPreference from "./CartDesignPreference";
import CartItemDetails from "./CartItemDetails";
import CartSpecificationBadges from "./CartSpecificationBadges";
import { useId } from "react";

interface CartItemCardProps {
  item: CartItem;
  onRemove: () => void;
  onDesignOptionChange: (value: CartDesignOption) => void;
}

export default function CartItemCard({
  item,
  onRemove,
  onDesignOptionChange,
}: CartItemCardProps) {
  const radioGroupId = useId();

  return (
    <Card className="relative z-10 gap-0 rounded-2xl border border-border/80 bg-white py-0 shadow-sm ring-0">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <Badge
            variant="secondary"
            className="h-6 rounded-full px-2 text-muted-foreground"
          >
            #{item.id}
          </Badge>
          <p className="text-base font-bold text-primary">{item.price}</p>
        </div>

        <CartItemDetails
          title={item.title}
          printerName={item.printerName}
          onRemove={onRemove}
        >
          <CartSpecificationBadges
            specifications={item.specifications}
            deliveryEstimate={item.deliveryEstimate}
          />
        </CartItemDetails>

        <CartDesignPreference
          groupId={radioGroupId}
          value={item.designOption}
          onValueChange={onDesignOptionChange}
        />
      </CardContent>
    </Card>
  );
}