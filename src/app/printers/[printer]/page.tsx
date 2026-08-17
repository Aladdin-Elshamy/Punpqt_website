import Decide from "@/features/printers/sections/Decide";
import PrintersGrid from "@/features/printers/sections/PrintersGrid";
import AboutUs from "@/features/specific-printer/sections/AboutUs";
import CustomerReviews from "@/features/specific-printer/sections/CustomerReviews";
import PortfolioGallery from "@/features/specific-printer/sections/PortfolioGallery";
import ProductsServices from "@/features/specific-printer/sections/ProductsServices";
import ProfileHeader from "@/features/specific-printer/sections/ProfileHeader";
import Statistics from "@/features/specific-printer/sections/Statistics";

export default function PrinterPage() {
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
            <ProfileHeader />
            </div>
            <Statistics />
            <AboutUs />
            <ProductsServices />
            <PortfolioGallery />
            <CustomerReviews />
        </main>
    );
}
