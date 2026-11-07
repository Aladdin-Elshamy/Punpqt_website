export * from "../models/ads.model";
export * from "../models/products.model";
export * from "../models/printers.model";
export * from "../models/features.model";

import type { AdsData } from "../models/ads.model";
import type { Product } from "../models/products.model";
import type { TrustedPrinter } from "../models/printers.model";
import type { HomeFeature } from "../models/features.model";

export interface HomeData {
  ads: AdsData;
  popular_products: Product[];
  products: Product[];
  trusted_printers: TrustedPrinter[];
  features: HomeFeature[];
}

export interface HomeApiResponse {
  status: boolean;
  message: string;
  data: HomeData;
}

