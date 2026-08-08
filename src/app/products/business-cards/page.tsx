import BrowseBusinessCards from "@/features/business-cards/sections/BrowseBusinessCards";
import BusinessCardsHero from "@/features/business-cards/sections/Hero";
import { EnhancedCirclePattern } from "@/shared/sections/withCirclePattern";

export default function SpecsPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="relative 2xl:container">
         <div
          className="pointer-events-none absolute ltr:left-4 rtl:right-4 sm:ltr:-left-12 sm:rtl:-right-12 -top-8 sm:top-8
             h-82 w-2/3
             rounded-full
             bg-[#0D7377]/20
             blur-[140px]"
        />
        <EnhancedCirclePattern defaultCols={8} defaultRows={8} mask={true} />
        <BusinessCardsHero />
      </div>
      <BrowseBusinessCards />
    </main>
  );
}
