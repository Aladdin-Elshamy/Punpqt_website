export interface TrustedPrinter {
  id: number;
  slug: string;
  company_name: string;
  logo_url: string | null;
  city: string;
  rating: number;
  reviews_count: number;
  orders_count: number;
  tags: string[];
}

