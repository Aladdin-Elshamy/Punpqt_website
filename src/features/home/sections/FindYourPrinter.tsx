import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TrendUp from "@/shared/icons/TrendUp";
import { Upload } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FindYourPrinter() {
  const t = useTranslations("FindYourPrinter");

  return (
    <section className="container mx-auto px-6 md:px-8 lg:px-6 ">
      <div className="p-12 rounded-2xl border shadow-sm flex items-center flex-col justify-center text-center relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[90%] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,rgba(59,130,246,0.08)_35%,transparent_75%)] blur-3xl -z-10" />
        <Badge className="font-semibold text-primary bg-[#E8F4F4] items-center h-8 gap-2 px-4 ">
          <TrendUp /> {t("badge")}
        </Badge>
        <h3 className="font-semibold mt-6 text-3xl">{t("title")}</h3>
        <p className="text-[#6B6B80] text-sm mt-4 max-w-sm font-semibold">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button className="text-sm items-center font-medium h-12 w-40 rounded-2xl gap-2!">
            <Upload /> {t("buttons.createRfq")}
          </Button>
          <Button
            variant="secondary"
            className="text-sm items-center font-medium h-12 w-40 rounded-xl gap-2! bg-white border-2 border-[#0000000F]!"
          >
            {t("buttons.browsePrinters")}
          </Button>
        </div>
      </div>
    </section>
  );
}