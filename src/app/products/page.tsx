import CirclePattern from "@/shared/sections/CirclePattern";
import AllProducts from "@/features/products/sections/AllProducts";
import ProductsHero from "@/features/products/sections/Hero";
import PopularProducts from "@/features/products/sections/PopularProducts";
import { EnhancedCirclePattern } from "@/shared/sections/withCirclePattern";

export default function ProductsPage() {
  return (
    <main className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute ltr:left-4 rtl:right-4 sm:ltr:-left-12 sm:rtl:-right-12 -top-8 sm:top-44
                 h-80 w-2/3
                 rounded-full
                 bg-[#0D7377]/20
                 blur-[140px]"
      />
      <EnhancedCirclePattern mask={true} />
      <div className="relative overflow-hidden 2xl:container mx-auto">
        <ProductsHero />
      </div>
      <PopularProducts />
      <AllProducts />
    </main>
  );
}
