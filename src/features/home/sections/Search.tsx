import { Badge } from "@/components/ui/badge";
import SearchComponent from "../components/Search";
import { useTranslations } from "next-intl";

export default function Search() {
  const t = useTranslations("Search");

  const categoryBadges = [
    t("badges.businessCards"),
    t("badges.flyers"),
    t("badges.packaging"),
    t("badges.brochures"),
    t("badges.customRfq"),
  ];

  return (
    <div className="container px-6 md:px-8 lg:px-6 mt-16 sm:mt-36 ">
      <SearchComponent />
      <div className="mt-6 flex flex-wrap gap-3 relative z-20">
        {categoryBadges.map((badge) => (
          <Badge
            key={badge}
            variant="outline"
            className="bg-white text-base h-8 px-4 font-semibold"
          >
            {badge}
          </Badge>
        ))}
      </div>
    </div>
  );
}
