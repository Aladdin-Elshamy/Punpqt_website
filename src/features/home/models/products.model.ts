export type PricingType = "fixed" | "calculated" | string;

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

