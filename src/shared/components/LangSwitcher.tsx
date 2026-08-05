"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { changeLocaleAction } from "@/shared/functions/changeLocaleAction";
import { useLocale, useTranslations } from "next-intl";


export function LangSwitcher() {
  const t = useTranslations("LangSwitcher")
  const items = [
    { label: t("ar"), value: "ar" },
    { label: t("en"), value: "en" },
  ];
  const locale = useLocale();
  return (
    <Select
        
      defaultValue={locale}
      onValueChange={(value: string | null) => {
        if (value) changeLocaleAction(value);
      }}
      items={items}
    >
      <SelectTrigger className="w-full" style={{height:"100%"}}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
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
