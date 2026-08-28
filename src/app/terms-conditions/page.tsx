import HeroSection from "@/features/terms-conditions/sections/Hero";
import TermsContent from "@/features/terms-conditions/sections/TermsContent";
import { EnhancedCirclePattern } from "@/shared/sections/withCirclePattern";

export default function TermsAndConditionsPage() {
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
      </div>
      <div className="relative z-10 bg-white py-16 sm:py-24">
        <TermsContent />
      </div>
    </main>
  );
}

