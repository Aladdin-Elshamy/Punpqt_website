"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Ticket from "@/shared/icons/Ticket";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function PromoCodeCard() {
  const t = useTranslations("ShoppingCart.promoCode");
  const [promoCode, setPromoCode] = useState("");

  return (
    <Card className="gap-0 rounded-2xl border ring-0 border-border/80 py-0 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <Ticket className="size-4 text-primary" />
          <h2 className="text-sm font-semibold text-foreground">{t("placeholder")}</h2>
        </div>

        <div className="mt-3 flex gap-2">
          <Input
            value={promoCode}
            onChange={(event) => setPromoCode(event.target.value)}
            placeholder={t("placeholder")}
            aria-label="Promo code"
            className="h-11 rounded-xl bg-muted/70 font-semibold text-sm shadow-none"
          />
          <Button
            type="button"
            size="sm"
            className="h-11 shrink-0 rounded-xl px-4 text-xs font-semibold"
          >
            {t("apply")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}