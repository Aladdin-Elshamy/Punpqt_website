import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import type { TrustedPrinter } from "../models/printers.model";

function getInitials(name: string): string {
  if (!name) return "P";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export default function TopPrinter({ printer }: { printer: TrustedPrinter }) {
  const t = useTranslations("TopPrinter");

  const stats = [
    {
      value: printer.rating > 0 ? printer.rating.toFixed(1) : "—",
      label: t("stats.rating"),
    },
    {
      value: printer.reviews_count > 0 ? `${printer.reviews_count}` : "0",
      label: t("stats.reviews"),
    },
    {
      value: printer.orders_count > 0 ? `${printer.orders_count}` : "0",
      label: t("stats.orders"),
    },
  ];

  return (
    <Card className="w-full max-w-xl rounded-[24px] border-0 shadow-sm @container/top-printer p-0">
      <CardContent className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex gap-4 flex-wrap items-center">
            {printer.logo_url ? (
              <div className="relative h-16 w-16 overflow-hidden rounded-3xl">
                <Image
                  src={printer.logo_url}
                  alt={printer.company_name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className="flex h-16 w-16 items-center justify-center rounded-3xl text-2xl font-bold text-white select-none"
                style={{
                  background:
                    "linear-gradient(135deg, #0D7377 0%, #14919B 100%)",
                }}
              >
                {getInitials(printer.company_name)}
              </div>
            )}

            <div>
              <h3 className="font-semibold text-lg text-black">
                {printer.company_name}
              </h3>
              <p className="text-sm font-semibold text-[#6B6B80]">
                {printer.city || t("noCity")}
              </p>
            </div>
          </div>

          <Badge
            variant="secondary"
            className="rounded-full bg-[#E8F4F4] px-4 h-8 text-sm font-semibold text-teal-800"
          >
            {t("badge")}
          </Badge>
        </div>

        {/* Stats */}
        <div className="grid @sm/top-printer:grid-cols-2 @md/top-printer:grid-cols-3 grid-cols-1 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[#F4F4F6] p-4 text-center"
            >
              <p className="text-xl font-semibold text-teal-700">
                {stat.value}
              </p>
              <p className="text-[#6B6B80] font-semibold mt-1 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Services / Tags */}
        {printer.tags && printer.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {printer.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-full px-4 py-1 text-sm font-semibold"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="secondary"
            className="h-12 rounded-full text-sm sm:text-base font-semibold bg-[#E8F4F4] text-[#0A5C5F] hover:bg-[#D1E8E8]"
            render={
              <Link href={`/printers/${printer.slug || printer.id}`}>
                {t("buttons.viewProfile")}
              </Link>
            }
            nativeButton={false}
          />

          <Button
            className="h-12 rounded-full bg-teal-700 text-sm sm:text-base hover:bg-teal-800"
            render={
              <Link href="/custom-rfq">
                {t("buttons.getQuote")}
              </Link>
            }
            nativeButton={false}
          />
        </div>
      </CardContent>
    </Card>
  );
}
