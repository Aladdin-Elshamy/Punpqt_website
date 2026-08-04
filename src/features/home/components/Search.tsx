import SearchIcon from "@/shared/icons/Search";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Search() {
  const t = useTranslations("Search.form");

  return (
    <InputGroup className="max-w-2xl border-[0.99px] border-[#0000000F] bg-white py-8 rounded-4xl px-2 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
      <InputGroupInput
        className="sm:text-lg! text-sm"
        placeholder={t("placeholder")}
      />
      <InputGroupAddon>
        <SearchIcon className="size-5 me-2" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Button size="sm" className="h-9 px-4 text-sm rounded-xl font-medium">
          {t("submit")}
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}