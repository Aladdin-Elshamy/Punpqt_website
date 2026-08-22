import type { CheckoutProduct, ProductUploadDetails } from "./checkout.types";

export const CHECKOUT_PRODUCTS: CheckoutProduct[] = [
  {
    id: "business-cards",
    title: "Premium Business Cards",
    quantity: "500 pcs",
    price: "EGP 180",
    filesCount: 0,
  },
  {
    id: "flyers",
    title: "A5 Promotional Flyers",
    quantity: "1,000 pcs",
    price: "EGP 360",
    filesCount: 0,
  },
];

export const PRODUCT_UPLOAD_DETAILS: Record<string, ProductUploadDetails> = {
  "business-cards": {
    specification: "Matt 400gsm · Gloss Lamination",
    printer: "Elite Printing Co.",
  },
  flyers: {
    specification: "Coated 350gsm · None",
    printer: "Premium Print Hub",
  },
};

export const CHECKOUT_TOTALS = {
  delivery: "EGP 80",
  total: "EGP 620",
};