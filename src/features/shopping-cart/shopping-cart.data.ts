import type { CartItem, CartOrderTotals } from "./shopping-cart.types";

export const CART_ITEMS: CartItem[] = [
  {
    id: 1,
    title: "Premium Business Cards",
    printerName: "Elite Printing Co.",
    price: "EGP 240",
    specifications: ["9×5cm", "Coated 350gsm", "Gloss Lamination", "2-3 days"],
    deliveryEstimate: "2-3 days",
    designOption: "printer",
  },
  {
    id: 2,
    title: "Premium Business Cards",
    printerName: "Elite Printing Co.",
    price: "EGP 240",
    specifications: ["9×5cm", "Coated 350gsm", "Gloss Lamination", "2-3 days"],
    deliveryEstimate: "2-3 days",
    designOption: "printer",
  },
];

export const CART_ORDER_TOTALS: CartOrderTotals = {
  subtotal: "EGP 1,220",
  delivery: "EGP 80",
  total: "EGP 1,300",
};

export const CART_SORT_OPTIONS = [
  { value: "urgency", label: "⚡ By Urgency" },
  { value: "price", label: "By Price" },
  { value: "date", label: "Added Order" },
] as const;