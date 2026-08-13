import BrowseProductCards from "@/features/specific-product/sections/BrowseProductCards";
import Gallery from "@/features/specification/sections/Gallery";
import SpecificationPanel from "@/features/specification/sections/SpecificationPanel";
import BreadcrumbBasic from "@/shared/components/BreadCrumb";

export default function ProductPage() {
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
                {/* <EnhancedCirclePattern defaultCols={8} defaultRows={8} mask={true} /> */}
            </div>
            <div className="container 2xl:px-0 2xl:w-full flex-col mt-36 mx-auto md:px-8 lg:px-6">
                <div className="flex items-center  gap-2.5">
                    <BreadcrumbBasic
                        links={[
                            {
                                label: "Home",
                                url: "/",
                            },
                            {
                                label: "Products",
                                url: "/products",
                            },
                            {
                                label: "Business Cards",
                                url: `/products/business-cards`,
                            },
                            {
                                label: "Gallery",
                                url: `/products/business-cards/gallery`,
                            },
                        ]}
                    />
                </div>
            </div>
            <section className="container mx-auto mt-11 grid gap-8 px-6 pb-16 md:px-8 lg:grid-cols-[minmax(0,1fr)_550px] lg:px-6 2xl:px-0">
                <Gallery />
                <SpecificationPanel />
            </section>
            <BrowseProductCards />
        </main>
    );
}
