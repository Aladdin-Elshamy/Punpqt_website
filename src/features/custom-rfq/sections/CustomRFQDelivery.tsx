"use client";

import { useEffect, useId } from "react";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  deliveryAddressIds,
  type CustomRFQDraft,
  type DeliveryAddressId,
} from "@/features/custom-rfq/custom-rfq.types";
import { cn } from "@/lib/utils";
import FormField from "@/shared/components/FormField";

type Props = {
  draft: CustomRFQDraft;
  onChange: (patch: Partial<CustomRFQDraft>) => void;
  onValidityChange: (isValid: boolean) => void;
};

const inputClassName = "h-[52px] rounded-2xl border-[#E2E2E5] bg-[#F4F4F6] px-4 shadow-none";

export default function CustomRFQDelivery({
  draft,
  onChange,
  onValidityChange,
}: Props) {
  const t = useTranslations("CustomRFQ.delivery");
  const cityId = useId();
  const addressId = useId();
  const dateId = useId();
  const isAddingAddress = draft.deliveryAddressId === null;
  const isValid = isAddingAddress
    ? Boolean(draft.deliveryCity.trim() && draft.deliveryAddress.trim() && draft.requiredBy)
    : Boolean(draft.deliveryAddressId);

  useEffect(() => {
    onValidityChange(isValid);
  }, [isValid, onValidityChange]);

  const selectSavedAddress = (addressId: DeliveryAddressId) => {
    onChange({ deliveryAddressId: addressId });
  };

  return (
    <section aria-labelledby="delivery-heading">
      <Card className="rounded-3xl border p-6! ring-0 sm:p-7! lg:p-8!">
        <div>
          <h2 id="delivery-heading" className="text-3xl font-semibold tracking-tight text-foreground">
            {t("title")}
          </h2>
          <p className="mt-2 text-sm font-semibold text-[#55577A]">{t("description")}</p>
        </div>

        {isAddingAddress ? (
          <div className="mt-8 grid gap-5">
            <FormField label={t("city")} htmlFor={cityId} required requiredLabel={t("required")}>
              <Input id={cityId} required value={draft.deliveryCity} onChange={(event) => onChange({ deliveryCity: event.target.value })} placeholder={t("cityPlaceholder")} className={inputClassName} />
            </FormField>
            <FormField label={t("fullAddress")} htmlFor={addressId} required requiredLabel={t("required")}>
              <Input id={addressId} required value={draft.deliveryAddress} onChange={(event) => onChange({ deliveryAddress: event.target.value })} placeholder={t("addressPlaceholder")} className={inputClassName} />
            </FormField>
            <FormField label={t("requiredBy")} htmlFor={dateId} required requiredLabel={t("required")}>
              <Input id={dateId} type="date" required value={draft.requiredBy} onChange={(event) => onChange({ requiredBy: event.target.value })} className={inputClassName} />
            </FormField>
            <Button type="button" variant="ghost" onClick={() => selectSavedAddress("home")} className="mt-1 w-fit px-0 text-primary hover:bg-transparent hover:text-primary/80">
              {t("chooseSavedAddress")}
            </Button>
          </div>
        ) : (
          <div className="mt-8">
            <div role="radiogroup" aria-label={t("savedAddresses")} className="grid gap-3">
              {deliveryAddressIds.map((addressId) => {
                const isSelected = draft.deliveryAddressId === addressId;

                return (
                  <button key={addressId} type="button" role="radio" aria-checked={isSelected} onClick={() => selectSavedAddress(addressId)} className={cn("flex w-full items-start gap-3 rounded-3xl border px-4 py-4 text-start outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 sm:px-5", isSelected ? "border-primary bg-[#E7F1F2]" : "border-[#D7D7DC] bg-background hover:border-primary/40 hover:bg-muted/30")}>
                    <span className={cn("mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border", isSelected ? "border-primary" : "border-[#77798D]")} aria-hidden="true">
                      {isSelected ? <span className="size-2.75 rounded-full bg-primary" /> : null}
                    </span>
                    <span>
                      <span className="block text-base font-semibold text-foreground">{t(`addresses.${addressId}.label`)}</span>
                      <span className="mt-2 block text-sm font-medium text-[#55577A]">{t(`addresses.${addressId}.details`)}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <button type="button" onClick={() => onChange({ deliveryAddressId: null })} className="mt-4 flex min-h-22 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-black/10 bg-[#FAFAFA] px-4 py-4 text-center outline-none transition-colors hover:border-primary/60 hover:bg-primary/5 focus-visible:ring-3 focus-visible:ring-ring/50">
              <span className="flex size-7 items-center justify-center rounded-full bg-[#E8F4F4] text-primary"><Plus className="size-5" aria-hidden="true" /></span>
              <span className="mt-2 text-sm font-semibold text-foreground">{t("addNewAddress")}</span>
            </button>
          </div>
        )}
      </Card>
    </section>
  );
}