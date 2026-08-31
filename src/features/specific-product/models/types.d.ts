export type CatalogTab = (typeof catalogTabs)[number];
export type CatalogView = (typeof catalogViews)[number];
export type CatalogCategory = (typeof catalogCategories)[number];

export interface CatalogSearchParams {
  tab?: string | string[];
  view?: string | string[];
  category?: string | string[];
  q?: string | string[];
}

export interface CatalogState {
  tab: CatalogTab;
  view: CatalogView;
  category: CatalogCategory;
  query: string;
}
