import Breadcrumb from "@/shared/components/BreadCrumb";
import { useTranslations } from "next-intl";

export default function ProductsHero() {
  const t = useTranslations("ProductsHero");

  return (
    <div className="container mt-36 mx-auto px-6 md:px-8 lg:px-6">
      <div className="flex items-center gap-2.5">
        <Breadcrumb
          links={[
            {
              label: t("breadcrumb.home"),
              url: "/",
            },
            {
              label: t("breadcrumb.allProducts"),
              url: "/products",
            },
          ]}
        />
      </div>
      <h1 className="font-bold text-3xl sm:text-6xl mt-6">{t("title")}</h1>
      <p className="text-[#6B6B80] font-semibold max-w-lg mt-5">
        {t("description")}
      </p>
    </div>
  );
}
