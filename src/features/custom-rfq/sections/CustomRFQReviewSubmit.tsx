"use client";

import { useTranslations } from "next-intl";

import { Card } from "@/components/ui/card";
import type { CustomRFQDraft } from "@/features/custom-rfq/custom-rfq.types";

type Props = { draft: CustomRFQDraft };
type ReviewRow = { label: string; value: string };

export default function CustomRFQReviewSubmit({ draft }: Props) {
  const t = useTranslations("CustomRFQ");
  const review = useTranslations("CustomRFQ.reviewSubmit");
  const unspecified = review("notSpecified");
  const savedAddress = draft.deliveryAddressId
    ? `${t(`delivery.addresses.${draft.deliveryAddressId}.label`)}  -  ${t(`delivery.addresses.${draft.deliveryAddressId}.details`)}`
    : draft.deliveryAddress || unspecified;
  const deliveryCity = draft.deliveryAddressId
    ? t(`delivery.addresses.${draft.deliveryAddressId}.details`)
    : draft.deliveryCity || unspecified;
  const size =
    draft.width && draft.height && draft.unit
      ? `${draft.width}  -  ${draft.height} ${t(`specifications.units.${draft.unit}`)}`
      : unspecified;
  const vendors =
    draft.vendorMode === "broadcast"
      ? review("allMatchingPrinters")
      : draft.selectedVendors.length
        ? review("specificPrinters", { count: draft.selectedVendors.length })
        : unspecified;
  const rows: ReviewRow[] = [
    {
      label: review("productType"),
      value: t(`productType.products.${draft.productType}.title`),
    },
    {
      label: review("quantity"),
      value: draft.quantity
        ? review("pieces", { count: draft.quantity })
        : unspecified,
    },
    {
      label: review("material"),
      value: draft.material
        ? t(`specifications.materials.${draft.material}`)
        : unspecified,
    },
    { label: review("size"), value: size },
    {
      label: review("printColors"),
      value: draft.printColors
        ? `${t(`specifications.printColorOptions.${draft.printColors}`)}${draft.printSides ? ` (${t(`specifications.printSideOptions.${draft.printSides}`)})` : ""}`
        : unspecified,
    },
    {
      label: review("finishing"),
      value: draft.finishing.length
        ? draft.finishing
            .map((item) => t(`specifications.finishingOptions.${item}`))
            .join(", ")
        : unspecified,
    },
    { label: review("deliveryAddress"), value: savedAddress },
    { label: review("deliveryCity"), value: deliveryCity },
    {
      label: review("deadline"),
      value: draft.requiredBy || review("flexible"),
    },
    { label: review("vendorMode"), value: vendors },
  ];

  return (
    <section aria-labelledby="review-submit-heading">
      <Card className="rounded-3xl border p-5! ring-0 sm:p-7! lg:p-7.5!">
        <h2
          id="review-submit-heading"
          className="text-3xl font-semibold tracking-tight"
        >
          {review("title")}
        </h2>
        <p className="mt-2 text-sm font-semibold text-muted-foreground">
          {review("description")}
        </p>
        <dl className="mt-7 divide-y">
          {rows.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-1 py-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8"
            >
              <dt className="font-semibold text-muted-foreground">{label}</dt>
              <dd className="text-start font-semibold sm:text-end">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </Card>
    </section>
  );
}
