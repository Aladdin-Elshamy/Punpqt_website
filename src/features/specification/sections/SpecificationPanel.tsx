"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, ShoppingCart } from "lucide-react";
import DeliveryNotice from "../components/DeliveryNotice";
import OptionGroup from "../components/OptionGroup";
import PriceSummaryCard from "../components/PriceSummaryCard";
import ProductHeader from "../components/ProductHeader";
import { useTranslations } from "next-intl";

const sizeOptions = [
  { label: "Standard 9x5cm", value: "standard-9x5" },
  { label: "Large 10x6cm", value: "large-10x6" },
  { label: "Square 5x5cm", value: "square-5x5" },
  { label: "Mini 8x4cm", value: "mini-8x4" },
];

const paperOptions = [
  {
    label: "Coated 350gsm",
    value: "coated-350gsm",
    description: "Most popular. Crisp, vibrant print.",
  },
  {
    label: "Matt 400gsm",
    value: "matt-400gsm",
    description: "Premium feel. No glare.",
    suffix: "+20%",
  },
  {
    label: "Kraft 300gsm",
    value: "kraft-300gsm",
    description: "Eco-friendly brown paper.",
    suffix: "+30%",
  },
  {
    label: "Recycled 350gsm",
    value: "recycled-350gsm",
    description: "Sustainable option.",
    suffix: "+15%",
  },
];

const printColorOptions = [
  { label: "Full Color Both Sides", value: "full-color-both-sides" },
  { label: "Full Color One Side", value: "full-color-one-side" },
  { label: "Black & White", value: "black-white" },
];

const finishingOptions = [
  { label: "None", value: "none" },
  {
    label: "Gloss Lamination",
    value: "gloss-lamination",
    suffix: "+EGP 80",
  },
  {
    label: "Matt Lamination",
    value: "matt-lamination",
    suffix: "+EGP 80",
  },
  { label: "Spot UV", value: "spot-uv", suffix: "+EGP 150" },
  { label: "Hot Foil Stamping", value: "hot-foil", suffix: "+EGP 200" },
  { label: "Soft Touch", value: "soft-touch", suffix: "+EGP 120" },
];

const quantityOptions = [
  { label: "250 pcs", value: "250" },
  { label: "500 pcs", value: "500" },
  { label: "1,000 pcs", value: "1000" },
  { label: "2,000 pcs", value: "2000" },
  { label: "5,000 pcs", value: "5000" },
];

export default function SpecificationPanel() {
  const t = useTranslations("Specification");
  const [size, setSize] = useState("standard-9x5");
  const [paper, setPaper] = useState("coated-350gsm");
  const [printColor, setPrintColor] = useState("full-color-both-sides");
  const [finishing, setFinishing] = useState("none");
  const [quantity, setQuantity] = useState("500");

  return (
    <aside className="w-full rounded-3xl lg:sticky lg:top-28">
      <div className="space-y-6">
        <ProductHeader />
        <PriceSummaryCard />

        <OptionGroup
          title={t("options.size")}
          options={sizeOptions}
          value={size}
          onChange={setSize}
        />

        <OptionGroup
          title={t("options.paper")}
          options={paperOptions}
          value={paper}
          onChange={setPaper}
          optionClassName="min-h-16"
          columns="one"
        />

        <OptionGroup
          title={t("options.printColor")}
          options={printColorOptions}
          value={printColor}
          onChange={setPrintColor}
          columns="three"
        />

        <OptionGroup
          title={t("options.finishing")}
          options={finishingOptions}
          value={finishing}
          onChange={setFinishing}
          columns="three"
          optionClassName="flex-col justify-center items-center"
        />

        <OptionGroup
          title={t("options.quantity")}
          options={quantityOptions}
          value={quantity}
          onChange={setQuantity}
          columns="four"
          optionClassName="min-h-10 rounded-full"
        />

        <DeliveryNotice />

        <div className="space-y-3">
          <Button className="h-13 w-full rounded-xl text-sm font-semibold">
            <ShoppingCart className="size-4" />
            {t("addToCart")} — EGP 180
          </Button>
          <Button
            variant="outline"
            className="h-12 w-full rounded-xl bg-white text-sm font-semibold"
          >
            <FileText className="size-4" />
            {t("needCustomSpecs")}
          </Button>
        </div>
      </div>
    </aside>
  );
}