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

export interface FilterProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: ((value: string | null, eventDetails: SelectRootChangeEventDetails) => void);
  className?: string;
  items: Array<{
    label: string;
    value: string;
  }>
}

export default function Filter({
  defaultValue,
  value,
  onValueChange,
  className = "",
  items,
}: FilterProps) {

  return (
    <Select
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      items={items}
    >
      <SelectTrigger
        className={`${className}`}
      >
      {/* <SelectTrigger
        className={`flex-1 w-40 xl:max-w-50 bg-white font-medium text-base px-3! py-4! h-15.25! rounded-xl ${className}`}
      > */}
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
