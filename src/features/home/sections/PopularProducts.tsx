import cards from "@/assets/images/cards.png";
import packaging from "@/assets/images/packaging.png";
import flayers from "@/assets/images/flayers.png";
import stickers from "@/assets/images/sticker.png";
import notebook from "@/assets/images/notebook.png";
import punpqt from "@/assets/images/punpqt.png";
import Heading from "../components/Heading";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/shared/icons/ArrowRight";
import { useTranslations } from "next-intl";

export default function PopularProducts() {
  const t = useTranslations("PopularProducts");

  return (
    <section className="container py-20 mx-auto px-6 md:px-8 lg:px-6">
      <div className="flex items-end justify-between">
        <Heading
          title={t("title")}
          description={
            <p className="text-3xl sm:text-6xl font-semibold">
              {t("description.before")}
              <span className="text-primary">
                {t("description.highlight")}
              </span>
            </p>
          }
        />
        <Button
          variant="link"
          className="mt-4 text-sm font-semibold text-[#6B6B80] items-center gap-0"
        >
          {t("allProducts")}
          <ArrowRight className="rtl:scale-x-[-1] ms-2" />
        </Button>
      </div>

      <div
        className="grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-12
        gap-4
        auto-rows-55 mt-8"
      >
        {/* Business Cards */}
        <div className="xl:col-span-7 xl:row-span-2 rounded-3xl relative bg-[#CCCCCC] overflow-hidden">
          <Image
            src={cards}
            alt={t("cards.title.line2")}
            className="absolute inset-0 ltr:translate-x-30 rtl:-translate-x-30 xl:ltr:translate-x-55 xl:rtl:-translate-x-55 xl:translate-y-20 scale-150 translate-y-5 sm:translate-y-0 "
          />
          <Badge className="absolute top-4 start-4 h-6 px-3 font-semibold">
            {t("badges.bestSeller")}
          </Badge>
          <div className="absolute bottom-4 start-4 text-white flex justify-start flex-col gap-3">
            <p className="text-sm">{t("cards.label")}</p>
            <p className="text-2xl sm:text-4xl font-bold">
              {t("cards.title.line1")}
              <br />
              {t("cards.title.line2")}
            </p>
          </div>
        </div>

        {/* Packaging */}
        <div className="xl:col-span-5 xl:row-span-1 rounded-3xl bg-white relative overflow-hidden border">
          <Image
            src={packaging}
            alt={t("packaging.label")}
            className="absolute ltr:-right-18 rtl:-left-18 sm:top-10 max-w-64 top-14 sm:max-w-xs rtl:scale-x-[-1]"
          />
          <div className="absolute top-4 start-4 text-white flex justify-start flex-col">
            <p className="text-sm text-[#00645D]">{t("packaging.label")}</p>
            <p className="text-xl sm:text-3xl font-semibold text-[#125D56]">
              {t("packaging.title.line1")}
              <br />
              {t("packaging.title.line2")}
            </p>
          </div>
          <Badge className="absolute bottom-4 start-4 h-10 w-24 px-2 bg-[#11504B] font-semibold">
            {t("badges.premium")}
          </Badge>
        </div>

        {/* Billboard */}
        <div className="xl:col-span-5 xl:row-span-1 rounded-3xl relative overflow-hidden">
          <Image
            src={punpqt}
            alt="PUNQT"
            className="absolute inset-0 max-w-full object-top"
          />

          <Badge className="absolute top-4 end-4 h-10 w-18 px-2 bg-white text-black font-semibold">
            {t("badges.popular")}
          </Badge>
        </div>

        {/* Flayers */}
        <div className="xl:col-span-4 xl:row-span-1 rounded-3xl bg-[#ECECEC] relative overflow-hidden">
          <Image
            src={flayers}
            alt={t("flayers")}
            className="absolute ltr:-right-32 rtl:-left-32 max-w-xs top-12 rtl:scale-x-[-1]"
          />
          <div className="absolute bottom-4 start-4 text-white flex justify-start flex-col gap-3">
            <p className="text-2xl sm:text-3xl font-semibold text-[#125D56]">
              {t("flayers")}
            </p>
          </div>
        </div>

        {/* Stickers */}
        <div className="xl:col-span-4 xl:row-span-1 rounded-3xl bg-white relative overflow-hidden border">
          <Image
            src={stickers}
            alt={t("stickers")}
            className="absolute ltr:right-0 rtl:left-0 max-w-52 top-4 sm:max-w-2xs sm:top-0"
          />
          <div className="absolute top-4 start-4 text-white flex justify-start flex-col gap-3">
            <p className="text-2xl sm:text-3xl font-semibold text-[#125D56]">
              {t("stickers")}
            </p>
          </div>
        </div>

        {/* Notebooks */}
        <div className="xl:col-span-4 xl:row-span-1 rounded-3xl relative overflow-hidden">
          <Image
            src={notebook}
            alt={t("notebooks")}
            className="absolute inset-0"
          />
          <Badge className="absolute top-4 start-4 h-10 w-24 px-2 bg-[#11504B] font-semibold">
            {t("badges.bestSeller")}
          </Badge>
          <div className="absolute bottom-4 start-4 text-white flex justify-start flex-col gap-3">
            <p className="text-2xl sm:text-4xl font-semibold text-shadow-accent-foreground">
              {t("notebooks")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}