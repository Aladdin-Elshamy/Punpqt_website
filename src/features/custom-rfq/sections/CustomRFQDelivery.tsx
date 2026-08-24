"use client";

import { useEffect, useId, useState } from "react";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import FormField from "@/shared/components/FormField";

type Props = { onValidityChange: (isValid: boolean) => void };
type AddressId = "home" | "work";

const addressIds: AddressId[] = ["home", "work"];
const inputClassName = "h-[52px] rounded-2xl border-[#E2E2E5] bg-[#F4F4F6] px-4 shadow-none";

export default function CustomRFQDelivery({ onValidityChange }: Props) {
  const t = useTranslations("CustomRFQ.delivery");
  const cityId = useId();
  const addressId = useId();
  const dateId = useId();
  const [selected, setSelected] = useState<AddressId | null>("home");
  const [adding, setAdding] = useState(false);
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const valid = adding ? Boolean(city.trim() && address.trim() && date) : selected !== null;

  useEffect(() => {
    onValidityChange(valid);
  }, [onValidityChange, valid]);

  return (
    <section aria-labelledby="delivery-heading">
      <Card className="rounded-3xl border p-6! ring-0 sm:p-7! lg:p-8!">
        <div>
          <h2 id="delivery-heading" className="text-3xl font-semibold tracking-tight text-foreground">
            {t("title")}
          </h2>
          <p className="mt-2 text-sm font-semibold text-[#55577A]">{t("description")}</p>
        </div>

        {adding ? (
          <div className="mt-8 grid gap-5">
            <FormField label={t("city")} htmlFor={cityId} required requiredLabel={t("required")}>
              <Input id={cityId} required value={city} onChange={(event) => setCity(event.target.value)} placeholder={t("cityPlaceholder")} className={inputClassName} />
            </FormField>
            <FormField label={t("fullAddress")} htmlFor={addressId} required requiredLabel={t("required")}>
              <Input id={addressId} required value={address} onChange={(event) => setAddress(event.target.value)} placeholder={t("addressPlaceholder")} className={inputClassName} />
            </FormField>
            <FormField label={t("requiredBy")} htmlFor={dateId} required requiredLabel={t("required")}>
              <Input id={dateId} type="date" required value={date} onChange={(event) => setDate(event.target.value)} className={inputClassName} />
            </FormField>
            <Button type="button" variant="ghost" onClick={() => setAdding(false)} className="mt-1 w-fit px-0 text-primary hover:bg-transparent hover:text-primary/80">
              {t("chooseSavedAddress")}
            </Button>
          </div>
        ) : (
          <div className="mt-8">
            <div role="radiogroup" aria-label={t("savedAddresses")} className="grid gap-3">
              {addressIds.map((id) => {
                const isSelected = selected === id;

                return (
                  <button key={id} type="button" role="radio" aria-checked={isSelected} onClick={() => setSelected(id)} className={cn("flex w-full items-start gap-3 rounded-3xl border px-4 py-4 text-start outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 sm:px-5", isSelected ? "border-primary bg-[#E7F1F2]" : "border-[#D7D7DC] bg-background hover:border-primary/40 hover:bg-muted/30")}>
                    <span className={cn("mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border", isSelected ? "border-primary" : "border-[#77798D]")} aria-hidden="true">
                      {isSelected ? <span className="size-2.75 rounded-full bg-primary" /> : null}
                    </span>
                    <span>
                      <span className="block text-base font-semibold text-foreground">{t(`addresses.${id}.label`)}</span>
                      <span className="mt-2 block text-sm font-medium text-[#55577A]">{t(`addresses.${id}.details`)}</span>
                    </span>
                  </button>
                );
              })}
            </div>
            <button type="button" onClick={() => { setSelected(null); setAdding(true); }} className="mt-4 flex min-h-22 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-black/10 bg-[#FAFAFA] px-4 py-4 text-center outline-none transition-colors hover:border-primary/60 hover:bg-primary/5 focus-visible:ring-3 focus-visible:ring-ring/50">
              <span className="flex size-7 items-center justify-center rounded-full bg-[#E8F4F4] text-primary"><Plus className="size-5" aria-hidden="true" /></span>
              <span className="mt-2 text-sm font-semibold text-foreground">{t("addNewAddress")}</span>
            </button>
          </div>
        )}
      </Card>
    </section>
  );
}