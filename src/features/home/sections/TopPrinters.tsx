import { Button } from "@/components/ui/button";
import Heading from "../components/Heading";
import ArrowRight from "@/shared/icons/ArrowRight";
import TopPrinter from "../components/TopPrinter";
import { useTranslations } from "next-intl";
import Link from "next/link";
import type { TrustedPrinter } from "../models/printers.model";

export default function TopPrinters({
  printers,
}: {
  printers?: TrustedPrinter[];
}) {
  const t = useTranslations("TopPrinters");

  const printerList = printers ?? [];

  return (
    <div className="container py-20 mx-auto px-6 md:px-8 lg:px-6">
      <div className="flex items-end justify-between">
        <Heading
          title={t("title")}
          description={
            <p className="text-3xl font-semibold">{t("description")}</p>
          }
        />
        <Button
          variant="link"
          className="mt-4 text-sm font-semibold text-primary items-center gap-0"
          render={
            <Link href={"/printers"}>
              {t("allPrinters")}
              <ArrowRight className="rtl:scale-x-[-1] ms-2" />
            </Link>
          }
          nativeButton={false}
        />
      </div>

      {printerList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-16">
          {printerList.map((printer) => (
            <TopPrinter key={printer.id} printer={printer} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-muted-foreground py-12 rounded-2xl bg-white border">
          <p className="text-base font-medium">{t("empty")}</p>
        </div>
      )}
    </div>
  );
}
