import FeaturesStatistics from "@/features/who-we-are/sections/FeaturesStatistics";
import HeroSection from "@/features/who-we-are/sections/Hero";
import MeetTheTeam from "@/features/who-we-are/sections/MeetTheTeam";
import PrintSmarter from "@/features/who-we-are/sections/PrintSmarter";
import WhatWeStandFor from "@/features/who-we-are/sections/WhatWeStandFor";
import WhyWeBuilt from "@/features/who-we-are/sections/WhyWeBuilt";
import { EnhancedCirclePattern } from "@/shared/sections/withCirclePattern";

export default function WhoWeArePage() {
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
        <EnhancedCirclePattern mask={true} />
        <HeroSection />
        <div className="bg-white relative z-10">
          <FeaturesStatistics />
          <WhyWeBuilt />
          <WhatWeStandFor />
          <MeetTheTeam />
          <PrintSmarter />
        </div>
      </div>
    </main>
  );
}
