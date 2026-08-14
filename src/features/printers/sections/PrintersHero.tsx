import { Badge } from "@/components/ui/badge";
import Star from "@/shared/icons/Star";
import { useTranslations } from "next-intl";

export default function PrintersHero() {
    const t = useTranslations("PrintersHero");

    return (
        <div className="container 2xl:px-0 2xl:w-full flex justify-center sm:block flex-col sm:mt-36 mx-auto md:px-8 lg:px-6 h-[calc(100vh-74px)] sm:h-auto">
            <Badge className="h-8! font-semibold px-4 border-[#0D73771A] ">
                <Star /> {t("badge")}
            </Badge>
            <h1 className="font-bold text-3xl sm:text-5xl mt-6">
                Find {" "}
                <span className="text-primary rtl:mt-4 rtl:block">
                    your printer
                </span>
            </h1>
            <p className="text-muted-foreground font-semibold max-w-lg mt-9">
                Connect with 500+ verified Egyptian printing houses. Get competitive quotes, approve samples digitally, and track production in real time.
            </p>
        </div>
    );
}
