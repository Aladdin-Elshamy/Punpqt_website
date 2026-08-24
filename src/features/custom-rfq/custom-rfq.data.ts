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