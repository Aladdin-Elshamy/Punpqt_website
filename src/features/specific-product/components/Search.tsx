import SearchIcon from "@/shared/icons/Search";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import { CatalogState } from "../models/types";

interface SearchSpecsProps {
  catalogState: CatalogState;
}

export default async function SearchSpecs({ catalogState }: SearchSpecsProps) {
  const t = await getTranslations("SpecificProduct.catalog");

  return (
    <form className="xl:flex-2" action="">
      <input type="hidden" name="tab" value={catalogState.tab} />
      <input type="hidden" name="view" value={catalogState.view} />
      <input type="hidden" name="category" value={catalogState.category} />
      <InputGroup className="border border-[#0B646854] bg-white py-7.5 rounded-xl">
        <InputGroupInput
          name="q"
          defaultValue={catalogState.query}
          className="sm:text-lg! text-xs placeholder:text-base"
          placeholder={t("searchPlaceholder")}
        />
        <InputGroupAddon className="ps-3 py-0!">
          <SearchIcon className="me-2" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end" className="pe-1.5 py-0!">
          <Button type="submit" size="sm" className="h-14 w-20! text-sm rounded-xl font-medium">
            {t("searchSubmit")}
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}
