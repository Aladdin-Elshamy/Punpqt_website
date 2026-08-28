import CommonQuestions from "@/features/get-in-touch/sections/CommonQuestions";
import HeroSection from "@/features/get-in-touch/sections/Hero";
import SendMessage from "@/features/get-in-touch/sections/SendMessage";
import { EnhancedCirclePattern } from "@/shared/sections/withCirclePattern";

export default function GetInTouchPage() {
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
        <div className="container grid gap-14 md:px-8 lg:grid-cols-2 lg:px-6 2xl:px-0">
          <SendMessage />
          <CommonQuestions />
        </div>
      </div>
    </main>
  );
}