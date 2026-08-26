"use client";

import { useEffect, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Check, Star, UserRound, UsersRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  type VendorId,
  type VendorSelectionMode,
} from "@/features/custom-rfq/custom-rfq.types";
import { cn } from "@/lib/utils";

type Props = {
  mode: VendorSelectionMode;
  selected: VendorId[];
  onModeChange: (mode: Exclude<VendorSelectionMode, null>) => void;
  onSelectedChange: (vendors: VendorId[]) => void;
  onValidityChange: (valid: boolean) => void;
};

const vendors: VendorId[] = ["elite", "premium", "quality", "quick"];

export default function CustomRFQChooseVendors({
  mode,
  selected,
  onModeChange,
  onSelectedChange,
  onValidityChange,
}: Props) {
  const t = useTranslations("CustomRFQ.chooseVendors");
  const isValid = mode !== null && (mode !== "specific" || selected.length > 0);

  useEffect(() => {
    onValidityChange(isValid);
  }, [isValid, onValidityChange]);

  const selectMode = (nextMode: Exclude<VendorSelectionMode, null>) => {
    onModeChange(nextMode);
  };

  const toggleVendor = (vendor: VendorId) => {
    const nextSelected = selected.includes(vendor)
      ? selected.filter((item) => item !== vendor)
      : [...selected, vendor];

    onModeChange("specific");
    onSelectedChange(nextSelected);
  };

  return (
    <section aria-labelledby="choose-vendors-heading">
      <div>
        <h2 id="choose-vendors-heading" className="text-3xl font-semibold tracking-tight text-black">
          {t("title")}
        </h2>
        <p className="mt-2 text-sm font-semibold text-muted-foreground">
          {t("description")}
        </p>
      </div>
      <div role="radiogroup" aria-label={t("title")} className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
        <SelectionOption active={mode === "broadcast"} onClick={() => selectMode("broadcast")} icon={<UsersRound className="size-7" />} title={t("broadcast.title")} description={t("broadcast.description")} badge={t("recommended")} />
        <SelectionOption active={mode === "specific"} onClick={() => selectMode("specific")} icon={<UserRound className="size-7" />} title={t("specific.title")} description={t("specific.description")} />
      </div>
      {mode === "specific" ? (
        <div className="mt-8">
          <h3 className="text-base font-semibold text-black">
            {t("selectPrinters")}{" "}
            {selected.length > 0 ? `(${t("selectedCount", { count: selected.length })})` : null}
          </h3>
          <div className="mt-4 grid gap-3">
            {vendors.map((vendor) => (
              <VendorRow key={vendor} vendor={vendor} active={selected.includes(vendor)} onClick={() => toggleVendor(vendor)} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

type SelectionOptionProps = {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  title: string;
  description: string;
  badge?: string;
};

function SelectionOption({ active, onClick, icon, title, description, badge }: SelectionOptionProps) {
  return (
    <button type="button" role="radio" aria-checked={active} onClick={onClick} className={cn("min-h-52 rounded-3xl border p-6 text-start outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50", active ? "border-2 border-primary bg-[#EEF7F7]" : "border-[#E7E7E9] bg-background hover:border-primary/40")}>
      <span className={cn("flex size-9 items-center justify-center", active ? "text-primary" : "text-muted-foreground")} aria-hidden="true">{icon}</span>
      <span className={cn("mt-4 block text-base font-semibold", active ? "text-primary" : "text-black")}>{title}</span>
      <span className="mt-1.5 block text-sm font-medium leading-6 text-muted-foreground">{description}</span>
      {badge ? <Badge className="mt-4 h-7 font-semibold"><span className="trim">{badge}</span></Badge> : null}
    </button>
  );
}

type VendorRowProps = { vendor: VendorId; active: boolean; onClick: () => void };

function VendorRow({ vendor, active, onClick }: VendorRowProps) {
  const t = useTranslations("CustomRFQ.chooseVendors");

  return (
    <button type="button" role="checkbox" aria-checked={active} onClick={onClick} className={cn("flex min-h-24 w-full flex-wrap items-start gap-4 rounded-3xl border px-5 py-4 text-start outline-none transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 sm:items-center", active ? "border-2 border-primary bg-[#EEF7F7]" : "border-[#E7E7E9] bg-background hover:border-primary/40")}>
      <div className="flex items-start gap-4 sm:items-center">
        <span className={cn("flex size-6 shrink-0 items-center justify-center rounded-full border", active ? "border-primary bg-primary text-primary-foreground" : "border-[#E7E7E9] bg-background")} aria-hidden="true">{active ? <Check className="size-3.5" strokeWidth={3} /> : null}</span>
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#0D0D19] text-sm font-bold text-white">{t(`vendors.${vendor}.initials`)}</span>
        <span>
          <span className="flex flex-wrap items-center gap-2"><span className="font-semibold text-black">{t(`vendors.${vendor}.name`)}</span>{vendor === "elite" ? <Badge className="font-semibold">{t("topRated")}</Badge> : null}</span>
          <span className="mt-1 block text-sm font-semibold text-muted-foreground">Nasr City, Cairo</span>
        </span>
      </div>
      <span className="ms-auto shrink-0 text-end"><span className="flex items-center justify-end gap-1 font-semibold text-black"><Star className="size-4 fill-[#FFB800] text-[#FFB800]" aria-hidden="true" />{t(`vendors.${vendor}.rating`)}</span><span className="mt-1 block text-sm font-medium text-muted-foreground">{t(`vendors.${vendor}.reviews`)}</span></span>
    </button>
  );
}