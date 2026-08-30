import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import ArrowRight from "@/shared/icons/ArrowRight";
import Link from "next/link";

export default function TopPrinter() {
  const t = useTranslations("TopPrinter");

  const stats = [
    {
      value: "4.9",
      label: t("stats.rating"),
    },
    {
      value: "< 1.5h",
      label: t("stats.response"),
    },
    {
      value: "96%",
      label: t("stats.onTime"),
    },
  ];

  const services = [
    t("services.digital"),
    t("services.offset"),
    t("services.uv"),
  ];

  return (
    <Card className="w-full max-w-xl rounded-[24px] border-0 shadow-sm @container/top-printer p-0">
      <CardContent className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex gap-4 flex-wrap items-center">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-3xl text-2xl font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #0D7377 0%, #14919B 100%)",
              }}
            >
              SS
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                sdfsdf
              </h3>

              <p className="text-sm font-semibold text-[#6B6B80]">
                sdfsdfsdf
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

        {/* Services */}
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <Badge
              key={service}
              variant="secondary"
              className="rounded-full px-4 py-1 text-sm font-semibold"
            >
              {service}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="secondary"
            className="h-12 rounded-full text-sm sm:text-base font-semibold bg-[#E8F4F4] text-[#0A5C5F] hover:bg-[#D1E8E8]"
            render={<Link href={"/printers/1"}>
              {t("buttons.viewProfile")}
            </Link>}
            nativeButton={false}
          />


          <Button className="h-12 rounded-full bg-teal-700 text-sm sm:text-base hover:bg-teal-800">
            {t("buttons.getQuote")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}