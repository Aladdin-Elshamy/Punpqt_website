import { Button } from "@/components/ui/button";
import Heading from "../components/Heading";
import ArrowRight from "@/shared/icons/ArrowRight";
import TopPrinter from "../components/TopPrinter";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function TopPrinters() {
  const t = useTranslations("TopPrinters");

  return (
    <div className="container py-20 mx-auto px-6 md:px-8 lg:px-6">
      <div className="flex items-end justify-between">
        <Heading
          title={"top printers"}
          description={
            <p className="text-3xl font-semibold">{t("description")}</p>
          }
        />
        <Button
          variant="link"
          className="mt-4 text-sm font-semibold text-primary items-center gap-0"
          render={<Link href={"/printers"}>
            {t("allPrinters")}
            <ArrowRight className="rtl:scale-x-[-1] ms-2" />
          </Link>}
          nativeButton={false}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-16">
        <TopPrinter />
        <TopPrinter />
        <TopPrinter />
        <TopPrinter />
      </div>
    </div>
  );
}