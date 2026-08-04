import { Button } from "@/components/ui/button";
import ArrowRight from "@/shared/icons/ArrowRight";
import Step from "../components/Step";
import File from "@/shared/icons/File";
import People from "@/shared/icons/People";
import Check from "@/shared/icons/Check";
import { useTranslations } from "next-intl";

export default function CoreFeature() {
  const t = useTranslations("CoreFeature");

  return (
    <section className="container py-20 mx-auto px-6 md:px-8 lg:px-6">
      <div className="bg-primary p-12 rounded-2xl relative overflow-hidden @container/core-feature">
        <div className="hidden @xl/core-feature:block rounded-full w-60 h-60 absolute bg-[#17797c] ltr:-right-10 rtl:-left-10 -top-10 z-10"></div>
        <div className="hidden @xl/core-feature:block rounded-full w-45 h-45 absolute bg-[#17797c] ltr:right-12 rtl:left-10 -bottom-15"></div>
        <h2 className="text-sm tracking-widest uppercase text-[#b6d5d6] font-semibold">
          {t("eyebrow")}
        </h2>
        <h3 className="font-semibold text-white text-2xl sm:text-3xl mt-3">
          {t("title.line1")}
          <br />
          {t("title.line2")}
        </h3>
        <p className="mt-4 text-[#b6d5d6] font-semibold max-w-lg">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button
            variant={"secondary"}
            className={
              "text-base items-center text-primary font-semibold h-12 ltr:w-40 rounded-xl gap-2! rtl:w-48"
            }
          >
            {t("buttons.createRfq")}{" "}
            <ArrowRight className="text-[#0D7377] stroke-3! rtl:-scale-x-100" />
          </Button>
          <Button
            variant={"default"}
            className={
              "text-base items-center font-semibold h-12 w-40 rounded-xl gap-2! bg-[#31888b] text-white hover:bg-[#118589]"
            }
          >
            {t("buttons.browsePrinters")}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        <Step
          icon={<File className="text-primary" />}
          title={t("steps.describe.title")}
          step="01"
          description={t("steps.describe.description")}
        />
        <Step
          icon={<People className="text-primary" />}
          title={t("steps.receive.title")}
          step="02"
          description={t("steps.receive.description")}
        />
        <Step
          icon={<Check className="text-primary" />}
          title={t("steps.approve.title")}
          step="03"
          description={t("steps.approve.description")}
        />
      </div>
    </section>
  );
}