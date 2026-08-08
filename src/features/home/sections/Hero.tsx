import { Badge } from "@/components/ui/badge";
import Star from "@/shared/icons/Star";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <div className="container 2xl:px-0 2xl:w-full flex justify-center sm:block flex-col sm:mt-36 mx-auto md:px-8 lg:px-6 h-[calc(100vh-74px)] sm:h-auto">
      <Badge className="h-8! font-semibold px-4 border-[#0D73771A] ">
        <Star /> {t("badge")}
      </Badge>
      <h1 className="font-bold text-3xl sm:text-5xl mt-6">
        {t("title.line1")}
        <br />
        <span className="text-primary rtl:mt-4 rtl:block">
          {t("title.line2")}
        </span>
      </h1>
      <p className="text-[#6B6B80] font-semibold max-w-lg mt-5">
        {t("description")}
      </p>
    </div>
  );
}
