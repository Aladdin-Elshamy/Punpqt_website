import PrintersGrid from "@/features/printers/sections/PrintersGrid";
import PrintersHero from "@/features/printers/sections/PrintersHero";
import Search from "@/features/printers/sections/Search";
import { EnhancedCirclePattern } from "@/shared/sections/withCirclePattern";

export default function PrintersPage() {
    return (
        <main className="relative overflow-hidden">
            <div className="relative 2xl:container">
                <div
                    className="pointer-events-none absolute ltr:left-4 rtl:right-4 sm:ltr:-left-12 sm:rtl:-right-12 top-1/2 -translate-y-1/2 sm:top-8 sm:translate-y-0
             h-100 sm:h-82 w-2/3
             rounded-full
             bg-[#0D7377]/20
             blur-[140px]"
                />
                <EnhancedCirclePattern mask={true} />
                <PrintersHero />
            </div>
            <Search />
            <PrintersGrid />
        </main>
    );
}
