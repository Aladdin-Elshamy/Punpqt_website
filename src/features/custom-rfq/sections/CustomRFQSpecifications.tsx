"use client";
import { useId } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type {
  CustomRFQDraft,
  FinishingKey,
} from "@/features/custom-rfq/custom-rfq.types";
import { cn } from "@/lib/utils";
import FormField from "@/shared/components/FormField";
import SelectField from "@/shared/components/SelectField";
const materialKeys = [
  "coated",
  "uncoated",
  "kraft",
  "recycled",
  "vinyl",
] as const;
const unitKeys = ["millimeters", "centimeters", "inches"] as const;
const printColorKeys = ["fullColor", "blackAndWhite", "pantone"] as const;
const printSideKeys = ["single", "double"] as const;
const finishingKeys: FinishingKey[] = [
  "glossLamination",
  "mattLamination",
  "spotUv",
  "foilStamping",
  "embossing",
  "dieCut",
  "softTouch",
  "binding",
];
type Props = {
  draft: CustomRFQDraft;
  onChange: (patch: Partial<CustomRFQDraft>) => void;
};
export default function CustomRFQSpecifications({ draft, onChange }: Props) {
  const t = useTranslations("CustomRFQ.specifications");
  const ids = {
    quantity: useId(),
    material: useId(),
    width: useId(),
    height: useId(),
    unit: useId(),
    colors: useId(),
    sides: useId(),
    notes: useId(),
  };
  const toggle = (option: FinishingKey) =>
    onChange({
      finishing: draft.finishing.includes(option)
        ? draft.finishing.filter((item) => item !== option)
        : [...draft.finishing, option],
    });
  return (
    <section aria-labelledby="specifications-heading">
      <Card className="rounded-3xl border p-5! ring-0 sm:p-7! lg:p-7.5!">
        <div>
          <h2
            id="specifications-heading"
            className="text-2xl font-semibold text-foreground sm:text-3xl"
          >
            {t("title")}
          </h2>
          <p className="mt-1 text-sm font-medium tracking-wide text-muted-foreground">
            {t("description")}
          </p>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <FormField
            label={t("quantity")}
            required
            htmlFor={ids.quantity}
            requiredLabel={t("required")}
          >
            <Input
              className="h-11 rounded-xl bg-[#F4F4F6] px-3 shadow-none"
              id={ids.quantity}
              type="number"
              min="1"
              value={draft.quantity}
              onChange={(e) => onChange({ quantity: e.target.value })}
              placeholder={t("quantityPlaceholder")}
            />
          </FormField>
          <SelectField
            id={ids.material}
            label={t("material")}
            required
            requiredLabel={t("required")}
            value={draft.material}
            onValueChange={(material) => onChange({ material: material ?? "" })}
            placeholder={t("materialPlaceholder")}
            options={materialKeys.map((key) => ({
              value: key,
              label: t(`materials.${key}`),
            }))}
          />
          <FormField label={t("width")} htmlFor={ids.width}>
            <Input
              className="h-11 rounded-xl bg-[#F4F4F6] px-3 shadow-none"
              id={ids.width}
              type="number"
              value={draft.width}
              onChange={(e) => onChange({ width: e.target.value })}
            />
          </FormField>
          <FormField label={t("height")} htmlFor={ids.height}>
            <Input
              className="h-11 rounded-xl bg-[#F4F4F6] px-3 shadow-none"
              id={ids.height}
              type="number"
              value={draft.height}
              onChange={(e) => onChange({ height: e.target.value })}
            />
          </FormField>
          <SelectField
            id={ids.unit}
            label={t("unit")}
            value={draft.unit}
            onValueChange={(unit) => onChange({ unit: unit ?? "" })}
            placeholder={t("unit")}
            options={unitKeys.map((key) => ({
              value: key,
              label: t(`units.${key}`),
            }))}
          />
          <SelectField
            id={ids.colors}
            label={t("printColors")}
            value={draft.printColors}
            onValueChange={(printColors) =>
              onChange({ printColors: printColors ?? "" })
            }
            placeholder={t("printColorsPlaceholder")}
            options={printColorKeys.map((key) => ({
              value: key,
              label: t(`printColorOptions.${key}`),
            }))}
          />
          <SelectField
            id={ids.sides}
            label={t("printSides")}
            value={draft.printSides}
            onValueChange={(printSides) =>
              onChange({ printSides: printSides ?? "" })
            }
            placeholder={t("printSidesPlaceholder")}
            options={printSideKeys.map((key) => ({
              value: key,
              label: t(`printSideOptions.${key}`),
            }))}
          />
        </div>
        <div className="mt-7 border-t pt-6">
          <h3 className="text-sm font-semibold">{t("finishing")}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {finishingKeys.map((option) => (
              <Button
                key={option}
                type="button"
                variant={
                  draft.finishing.includes(option) ? "default" : "outline"
                }
                aria-pressed={draft.finishing.includes(option)}
                onClick={() => toggle(option)}
                className={cn(
                  "h-9 rounded-lg px-4 text-sm",
                  draft.finishing.includes(option) &&
                    "border-2 border-primary bg-[#E7F1F2]! text-primary!",
                )}
              >
                {t(`finishingOptions.${option}`)}
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-7">
          <FormField
            label={t("additionalNotes")}
            optional
            htmlFor={ids.notes}
            optionalLabel={t("optional")}
          >
            <Textarea
              className="mt-2 min-h-28 resize-y rounded-xl bg-[#F4F4F6] px-3 py-3 shadow-none"
              id={ids.notes}
              value={draft.notes}
              onChange={(e) => onChange({ notes: e.target.value })}
              placeholder={t("notesPlaceholder")}
            />
          </FormField>
        </div>
      </Card>
    </section>
  );
}
