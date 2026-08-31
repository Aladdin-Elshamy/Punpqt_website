import { CatalogSearchParams, CatalogState } from "../models/types";

export const catalogTabs = ["products", "printers"] as const;
export const catalogViews = ["grid", "list"] as const;
export const catalogCategories = [
  "popular",
  "quote-required",
  "fixed-price",
] as const;


function firstValue(value: string | string[] | undefined) {
  return typeof value === "string" ? value : undefined;
}

function isOneOf<T extends readonly string[]>(
  value: string | undefined,
  values: T,
): value is T[number] {
  return value !== undefined && values.includes(value);
}

export function parseCatalogSearchParams(
  searchParams: CatalogSearchParams,
): CatalogState {
  const tabValue = firstValue(searchParams.tab);
  const viewValue = firstValue(searchParams.view);
  const categoryValue = firstValue(searchParams.category);
  const queryValue = firstValue(searchParams.q);
  const tab = isOneOf(tabValue, catalogTabs) ? tabValue : "products";

  return {
    tab,
    view:
      tab === "printers"
        ? "list"
        : isOneOf(viewValue, catalogViews)
          ? viewValue
          : "grid",
    category: isOneOf(categoryValue, catalogCategories)
      ? categoryValue
      : "popular",
    query: queryValue?.trim() ?? "",
  };
}

export function catalogQueryString(state: CatalogState) {
  const params = new URLSearchParams();

  if (state.tab !== "products") params.set("tab", state.tab);
  if (state.category !== "popular") params.set("category", state.category);
  if (state.query) params.set("q", state.query);

  return params.toString();
}

export function catalogHref(state: CatalogState) {
  const query = catalogQueryString(state);
  return query ? `?${query}` : "?";
}
