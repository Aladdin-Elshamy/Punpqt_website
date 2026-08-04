import { Badge } from "@/components/ui/badge";
import Star from "@/shared/icons/Star";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <div className="container mt-36 mx-auto px-6 md:px-8 lg:px-6">
      <Badge className="h-8! bg-[#e8f4f4] font-semibold px-4 text-primary border-[#0D73771A]">
        <Star /> {t("badge")}
      </Badge>
      <h1 className="font-bold text-3xl sm:text-6xl mt-6">
        {t("title.line1")}
        <br />
        <span className="text-primary rtl:mt-4 rtl:block">{t("title.line2")}</span>
      </h1>
      <p className="text-[#6B6B80] font-semibold max-w-lg mt-5">
        {t("description")}
      </p>
    </div>
  );
}