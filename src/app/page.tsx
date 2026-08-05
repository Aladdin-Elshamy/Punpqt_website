import HeroSection from "@/features/home/sections/Hero";
import SearchSection from "@/features/home/sections/Search";
import CirclePattern from "@/shared/sections/CirclePattern";
import FeaturesStatistics from "@/features/home/sections/FeaturesStatistics";
import ChooseUs from "@/features/home/sections/ChooseUs";
import PopularProducts from "@/features/home/sections/PopularProducts";
import BrowseByProducts from "@/features/home/sections/BrowseByProducts";
import TopPrinters from "@/features/home/sections/TopPrinters";
import CoreFeature from "@/features/home/sections/CoreFeature";
import CustomerStories from "@/features/home/sections/CustomerStories";
import WhyPunpqt from "@/features/home/sections/WhyPunpqt";
import PrintingHouse from "@/features/home/sections/PrintingHouse";
import FindYourPrinter from "@/features/home/sections/FindYourPrinter";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute ltr:left-4 rtl:right-4 sm:ltr:-left-12 sm:rtl:-right-12 -top-8 sm:top-44
             h-82 w-2/3
             rounded-full
             bg-[#0D7377]/20
             blur-[140px]"
      />
      <CirclePattern />
      <div className="relative overflow-hidden 2xl:container mx-auto">
        <HeroSection />
      </div>
      <SearchSection />
      <FeaturesStatistics />
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 container mx-auto">
        <ChooseUs />
      </div>
      <PopularProducts />
      <div className="bg-[#FAFAFA] py-20">
        <BrowseByProducts />
      </div>
      <TopPrinters />
      <div className="bg-[#FAFAFA]">
        <div className="px-4 sm:px-8 md:px-12 lg:px-24 container mx-auto">
          <CoreFeature />
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 container mx-auto">
        <CustomerStories />
      </div>
      <div className="bg-[#FAFAFA] py-16">
        <div className="px-4 sm:px-8 md:px-12 lg:px-24 container mx-auto">
          <WhyPunpqt />
          <PrintingHouse />
        </div>
      </div>
      <div className="py-40">
        <div className="px-4 sm:px-8 md:px-12 lg:px-24 container mx-auto">
          <FindYourPrinter />
        </div>
      </div>
    </main>
  );
}
