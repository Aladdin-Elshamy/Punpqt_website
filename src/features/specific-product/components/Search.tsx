"use client";

import SearchIcon from "@/shared/icons/Search";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function SearchSpecs() {
  const t = useTranslations("SpecificProduct.catalog");

  return (
    <InputGroup className="xl:max-w-xs border border-[#0B646854] bg-white py-7.5 rounded-xl ">
      <InputGroupInput
        className="sm:text-lg! text-xs placeholder:text-base"
        placeholder={t("searchPlaceholder")}
      />
      <InputGroupAddon className="ps-3 py-0!">
        <SearchIcon className="me-2" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end" className="pe-1.5 py-0!">
        <Button size="sm" className="h-14 px-4 text-sm rounded-xl font-medium">
          {t("searchSubmit")}
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}