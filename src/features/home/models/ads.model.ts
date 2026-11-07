export type AdSize = "large" | "medium" | "small" | string;

export interface AdItem {
  id: number;
  title: string | null;
  image_url: string;
  url: string | null;
  size: AdSize;
}

export interface AdsData {
  large: AdItem[];
  medium: AdItem[];
  small: AdItem[];
}

