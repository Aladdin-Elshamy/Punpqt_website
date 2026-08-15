"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectRootChangeEventDetails } from "@base-ui/react";
import { useTranslations } from "next-intl";

export interface SelectCategoryProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: ((value: string | null, eventDetails: SelectRootChangeEventDetails) => void);
  className?: string;
}

export default function SelectCategory({
  defaultValue = "popular",
  value,
  onValueChange,
  className = "",
}: SelectCategoryProps) {
  const t = useTranslations("SpecificProduct.catalog.selectCategory");

  const items = [
    { label: t("popular"), value: "popular" },
    { label: t("quoteRequired"), value: "quote-required" },
    { label: t("fixedPrice"), value: "fixed-price" },
  ];

  return (
    <Select
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      items={items}
    >
      <SelectTrigger
        className={`flex-1 w-40 bg-white font-medium text-base px-3! py-4! h-15.25! rounded-xl ${className}`}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="font-medium text-base!">
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
