export type CartDesignOption = "upload" | "printer";

export interface CartItem {
  id: number;
  title: string;
  printerName: string;
  price: string;
  specifications: string[];
  deliveryEstimate: string;
  designOption: CartDesignOption;
}

export interface CartOrderTotals {
  subtotal: string;
  delivery: string;
  total: string;
}