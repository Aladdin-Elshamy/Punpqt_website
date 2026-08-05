import Breadcrumb from "@/shared/components/BreadCrumb";
import { useTranslations } from "next-intl";

export default function ProductsHero() {
  const t = useTranslations("ProductsHero");

  return (
    <div className="container 2xl:px-0 2xl:w-full flex justify-center sm:block flex-col sm:mt-36 mx-auto md:px-8 lg:px-6 h-[calc(100vh-75px)] sm:h-auto pb-0 sm:pb-52">
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
      <h1 className="font-bold text-3xl sm:text-5xl mt-6">{t("title")}</h1>
      <p className="text-[#6B6B80] font-semibold max-w-lg mt-5">
        {t("description")}
      </p>
    </div>
  );
}
