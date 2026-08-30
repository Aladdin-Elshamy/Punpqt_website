import { Button } from "@/components/ui/button";
import ArrowRight from "@/shared/icons/ArrowRight";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Decide() {
  const t = useTranslations("Decide");

  return (
    <section className="container py-20 mx-auto px-6 md:px-8 lg:px-6">
      <div className="bg-primary p-12 rounded-3xl">
        <h3 className="font-semibold text-white text-2xl sm:text-3xl">
          Can't Decide
          <br />
          Let printers compete for your job
        </h3>
        <div className="flex items-center flex-col sm:flex-row gap-2 mt-6">
          <p className="text-[#b6d5d6] font-semibold">
            Submit one RFQ and receive offers from multiple verified printers within 24 hours.
          </p>
          <Button
            variant={"ghost"}
            className={
              "text-base ms-auto items-center text-white font-semibold h-12 ltr:w-40 rounded-xl gap-2! rtl:w-48"
            }
            render={<Link href="/custom-rfq">
              <span className="trim">Submit RFQ</span>
              <ArrowRight className=" stroke-3! rtl:-scale-x-100" />
            </Link>}
            nativeButton={false}
          />
        </div>

      </div>
    </section>
  );
}