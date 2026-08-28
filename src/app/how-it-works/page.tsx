import Common from "@/features/how-it-works/sections/Common";
import FirstOlder from "@/features/how-it-works/sections/FirstOlder";
import HeroSection from "@/features/how-it-works/sections/Hero";
import PlaceOrder from "@/features/how-it-works/sections/PlaceOrder";
import Protection from "@/features/how-it-works/sections/Protection";
import RFQFlow from "@/features/how-it-works/sections/RFQFlow";
import { EnhancedCirclePattern } from "@/shared/sections/withCirclePattern";

export default function HowItWorlsPage() {
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
      <PlaceOrder />
      <RFQFlow />
      <Protection />
      <Common />
      <FirstOlder />
    </main>
  );
}
