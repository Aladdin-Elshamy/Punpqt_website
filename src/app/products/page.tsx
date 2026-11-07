import AllProducts from "@/features/products/sections/AllProducts";
import ProductsHero from "@/features/products/sections/Hero";
import PopularProducts from "@/features/products/sections/PopularProducts";
import { EnhancedCirclePattern } from "@/shared/sections/withCirclePattern";
import {
  getPopularProducts,
  getProducts,
} from "@/features/products/services/products.service";
import type { ProductsFilterParams } from "@/features/products/models/products.model";
import { getLocale } from "next-intl/server";

interface ProductsPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const [locale, rawParams] = await Promise.all([getLocale(), searchParams]);

  const filters: ProductsFilterParams = {
    category: typeof rawParams.category === "string" ? rawParams.category : undefined,
    popular: typeof rawParams.popular === "string" ? rawParams.popular : undefined,
    sort: typeof rawParams.sort === "string" ? rawParams.sort : undefined,
    search: typeof rawParams.search === "string" ? rawParams.search : undefined,
    page: typeof rawParams.page === "string" ? rawParams.page : undefined,
  };

  // If a specific filter is applied, only show the filtered results in AllProducts.
  // Otherwise, load popular products for the top showcase.
  const hasActiveFilters = Boolean(
    filters.category || filters.search || filters.popular || filters.sort || filters.page,
  );

  const [productsResult, popularProducts] = await Promise.all([
    getProducts(filters, locale),
    hasActiveFilters ? Promise.resolve([]) : getPopularProducts(locale),
  ]);

  return (
    <main className="relative overflow-hidden">
      <div className="relative 2xl:container">
        <div
          className="pointer-events-none absolute ltr:left-4 rtl:right-4 sm:ltr:-left-12 sm:rtl:-right-12 top-1/2 -translate-y-1/2 sm:top-8 sm:translate-y-0
             h-100 sm:h-82 w-full lg:w-2/3
             rounded-full
             bg-[#0D7377]/20
             blur-[140px]"
        />
        <EnhancedCirclePattern mask={true} />
        <ProductsHero />
      </div>

      {!hasActiveFilters && popularProducts.length > 0 && (
        <PopularProducts products={popularProducts} />
      )}

      <AllProducts
        products={productsResult.products}
        meta={productsResult.meta}
        filters={filters}
      />
    </main>
  );
}
