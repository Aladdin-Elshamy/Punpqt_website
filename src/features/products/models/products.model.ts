export type PricingType = "fixed" | "calculated" | "area_tiered" | string;

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  image_url: string | null;
  lowest_price: number | null;
  printers_count: number;
  pricing_type: PricingType;
  is_wishlisted: boolean;
}

export interface ProductsPaginationMeta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  has_more: boolean;
}

export interface ProductsApiResponse {
  status: boolean;
  message: string;
  data: Product[];
  meta?: ProductsPaginationMeta;
}

export interface ProductsFilterParams {
  category?: string;
  popular?: number | string;
  sort?: "price_asc" | "price_desc" | "latest" | "popular" | string;
  search?: string;
  page?: number | string;
}

