import HeroSection from "@/features/home/sections/Hero";
import SearchSection from "@/features/home/sections/Search";
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
import CirclePattern from "@/shared/sections/CirclePattern";

export default function HomePage() {
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
        <CirclePattern />
        <HeroSection />
      </div>
      <SearchSection />
      <FeaturesStatistics />
      <div className="px-4 sm:px-8 md:px-6 xl:px-8 container">
        <ChooseUs />
      </div>
      <PopularProducts />
      <div className="bg-[#FAFAFA] py-20">
        <BrowseByProducts />
      </div>
      <TopPrinters />
      <div className="bg-[#FAFAFA]">
        <div className="sm:px-8 md:px-6 xl:px-8 container">
          <CoreFeature />
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-6 xl:px-8 container">
        <CustomerStories />
      </div>
      <div className="bg-[#FAFAFA] py-16">
        <div className="px-4 sm:px-8 md:px-6 xl:px-8 container">
          <WhyPunpqt />
          <PrintingHouse />
        </div>
      </div>
      <div className="py-40">
        <div className="sm:px-8 md:px-6 xl:px-8 container">
          <FindYourPrinter />
        </div>
      </div>
    </main>
  );
}
