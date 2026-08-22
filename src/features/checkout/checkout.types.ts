export type CheckoutStep = "review" | "upload";

export interface CheckoutProduct {
  id: string;
  title: string;
  quantity: string;
  price: string;
  filesCount: number;
}

export interface ProductUploadDetails {
  specification: string;
  printer: string;
}