import AllProducts from "@/features/products/sections/AllProducts";
import ProductsHero from "@/features/products/sections/Hero";
import PopularProducts from "@/features/products/sections/PopularProducts";
import { EnhancedCirclePattern } from "@/shared/sections/withCirclePattern";

export default function ProductsPage() {
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
        <ProductsHero />
      </div>
      <PopularProducts />
      <AllProducts />
    </main>
  );
}
