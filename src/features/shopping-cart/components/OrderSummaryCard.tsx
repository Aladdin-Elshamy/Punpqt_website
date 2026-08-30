"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CartOrderTotals } from "../shopping-cart.types";
import OrderProtectionList from "./OrderProtectionList";
import OrderSummaryAmounts from "./OrderSummaryAmounts";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface OrderSummaryCardProps {
  itemCount: number;
  totals: CartOrderTotals;
}

export default function OrderSummaryCard({
  itemCount,
  totals,
}: OrderSummaryCardProps) {
  const t = useTranslations("ShoppingCart");

  return (
    <Card className="gap-0 rounded-2xl border border-border/80 py-0 shadow-sm ring-0">
      <CardContent className="p-4">
        <h2 className="text-sm font-semibold text-foreground">{t("orderSummary")}</h2>
        <OrderSummaryAmounts itemCount={itemCount} totals={totals} />

        <Button className="mt-6 h-11 w-full rounded-xl text-sm font-medium">
          {t("proceedToCheckout")}
          <ArrowRight className="size-4 rtl:rotate-180" />
        </Button>

        <OrderProtectionList />
      </CardContent>
    </Card>
  );
}