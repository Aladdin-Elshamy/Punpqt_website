import bannersImage from "@/assets/images/packaging.png";
import booksImage from "@/assets/images/notebook.png";
import brochuresImage from "@/assets/images/brochures.png";
import businessCardsImage from "@/assets/images/business-card.png";
import flyersImage from "@/assets/images/flyers.png";
import postersImage from "@/assets/images/cards.png";
import stickersImage from "@/assets/images/sticker.png";
import tShirtsImage from "@/assets/images/box.png";

export const CUSTOM_RFQ_PRODUCT_TYPES = [
  { id: "businessCards", image: businessCardsImage },
  { id: "flyers", image: flyersImage },
  { id: "brochures", image: brochuresImage },
  { id: "posters", image: businessCardsImage },

] as const;

export type CustomRFQProductTypeId =
  (typeof CUSTOM_RFQ_PRODUCT_TYPES)[number]["id"];

export const CUSTOM_RFQ_VENDORS = [
  { id: "elite" as const, initials: "EP", name: "Elite Printing", rating: "4.9", reviews: "128", location: "Nasr City, Cairo", isTopRated: true },
  { id: "premium" as const, initials: "PP", name: "Premium Print Hub", rating: "4.8", reviews: "96", location: "Dokki, Giza", isTopRated: false },
  { id: "quick" as const, initials: "QP", name: "Quick Print Co.", rating: "4.7", reviews: "84", location: "Maadi, Cairo", isTopRated: false },
  { id: "quality" as const, initials: "QP", name: "Quality Printing House", rating: "4.6", reviews: "72", location: "Alexandria", isTopRated: false },
];

export const CUSTOM_RFQ_SAVED_ADDRESSES = [
  { id: "home" as const, label: "Home", details: "12 Tahrir Street, Dokki, Giza" },
  { id: "work" as const, label: "Work", details: "Smart Village, 6th of October, Giza" },
];