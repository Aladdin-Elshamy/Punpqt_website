import { Button } from "@/components/ui/button";
import ArrowRight from "@/shared/icons/ArrowRight";
import { Printer } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PrintingHouse() {
  const t = useTranslations("PrintingHouse");

  return (
    <section className="container pt-4 mx-auto px-6 md:px-8 lg:px-6">
      <div className="bg-[#072B2D] p-12 rounded-2xl ">
        <Printer className="text-[#14919B] w-8 h-8" />
        <h3 className="font-semibold text-white text-xl mt-3">{t("title")}</h3>
        <p className="mt-3 mb-8 text-[#a8b5b5] font-semibold">
          {t("description")}
        </p>
        <Button className="w-full h-10 rounded-xl">
          {t("button")} <ArrowRight className="rtl:-scale-x-100" />
        </Button>
      </div>
    </section>
  );
}
