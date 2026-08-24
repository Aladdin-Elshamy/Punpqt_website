"use client";

import { useId, useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import FormField from "@/shared/components/FormField";
import SelectField from "@/shared/components/SelectField";

const materialKeys = ["coated", "uncoated", "kraft", "recycled", "vinyl"] as const;
const unitKeys = ["millimeters", "centimeters", "inches"] as const;
const printColorKeys = ["fullColor", "blackAndWhite", "pantone"] as const;
const printSideKeys = ["single", "double"] as const;
const finishingKeys = [
  "glossLamination",
  "mattLamination",
  "spotUv",
  "foilStamping",
  "embossing",
  "dieCut",
  "softTouch",
  "binding",
] as const;

type FinishingKey = (typeof finishingKeys)[number];

export default function CustomRFQSpecifications() {
  const t = useTranslations("CustomRFQ.specifications");
  const quantityId = useId();
  const materialId = useId();
  const widthId = useId();
  const heightId = useId();
  const unitId = useId();
  const printColorsId = useId();
  const printSidesId = useId();
  const notesId = useId();
  const [quantity, setQuantity] = useState("");
  const [material, setMaterial] = useState<string | null>("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<string | null>("");
  const [printColors, setPrintColors] = useState<string | null>("");
  const [printSides, setPrintSides] = useState<string | null>("");
  const [finishing, setFinishing] = useState<FinishingKey[]>([]);
  const [notes, setNotes] = useState("");

  const toggleFinishing = (option: FinishingKey) => {
    setFinishing((selected) =>
      selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option],
    );
  };

  return (
    <section aria-labelledby="specifications-heading">
      <Card className="rounded-3xl border p-5! ring-0 sm:p-7! lg:p-7.5!">
        <div>
          <h2 id="specifications-heading" className="text-2xl font-semibold text-foreground sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-1 text-sm font-medium tracking-wide text-muted-foreground">{t("description")}</p>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <FormField label={t("quantity")} required htmlFor={quantityId} requiredLabel={t("required")}>
            <Input id={quantityId} type="number" min="1" inputMode="numeric" value={quantity} onChange={(event) => setQuantity(event.target.value)} placeholder={t("quantityPlaceholder")} className="h-11 rounded-xl bg-[#F4F4F6] px-3 shadow-none" />
          </FormField>
          <SelectField id={materialId} label={t("material")} required requiredLabel={t("required")} value={material} onValueChange={setMaterial} placeholder={t("materialPlaceholder")} options={materialKeys.map((key) => ({ value: key, label: t(`materials.${key}`) }))} />
          <FormField label={t("width")} htmlFor={widthId}>
            <Input id={widthId} type="number" min="0" step="any" inputMode="decimal" value={width} onChange={(event) => setWidth(event.target.value)} placeholder={t("dimensionPlaceholder")} className="h-11 rounded-xl bg-[#F4F4F6] px-3 shadow-none" />
          </FormField>
          <FormField label={t("height")} htmlFor={heightId}>
            <Input id={heightId} type="number" min="0" step="any" inputMode="decimal" value={height} onChange={(event) => setHeight(event.target.value)} placeholder={t("dimensionPlaceholder")} className="h-11 rounded-xl bg-[#F4F4F6] px-3 shadow-none" />
          </FormField>
          <SelectField id={unitId} label={t("unit")} value={unit} onValueChange={setUnit} placeholder={t("unit")} options={unitKeys.map((key) => ({ value: key, label: t(`units.${key}`) }))} />
          <SelectField id={printColorsId} label={t("printColors")} value={printColors} onValueChange={setPrintColors} placeholder={t("printColorsPlaceholder")} options={printColorKeys.map((key) => ({ value: key, label: t(`printColorOptions.${key}`) }))} />
          <SelectField id={printSidesId} label={t("printSides")} value={printSides} onValueChange={setPrintSides} placeholder={t("printSidesPlaceholder")} options={printSideKeys.map((key) => ({ value: key, label: t(`printSideOptions.${key}`) }))} />
        </div>

        <div className="mt-7 border-t pt-6">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="text-sm font-semibold text-foreground">{t("finishing")}</h3>
            <p className="text-xs font-medium text-muted-foreground">{t("finishingDescription")}</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {finishingKeys.map((option) => {
              const selected = finishing.includes(option);
              return (
                <Button
                  key={option}
                  type="button"
                  variant={selected ? "default" : "outline"}
                  aria-pressed={selected}
                  onClick={() => toggleFinishing(option)}
                  className={cn(
                    "h-9 rounded-lg px-4 text-sm",
                    !selected && "border-border bg-white text-foreground hover:bg-primary/5 hover:text-primary",
                    selected && "border-primary bg-[#E7F1F2]! shadow-xs! text-primary! border-2",
                  )}
                >
                  {t(`finishingOptions.${option}`)}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="mt-7">
          <FormField label={t("additionalNotes")} optional htmlFor={notesId} optionalLabel={t("optional")}>
            <Textarea id={notesId} value={notes} onChange={(event) => setNotes(event.target.value)} placeholder={t("notesPlaceholder")} className="mt-2 min-h-28 resize-y rounded-xl bg-[#F4F4F6] px-3 py-3 shadow-none" />
          </FormField>
        </div>
      </Card>
    </section>
  );
}
