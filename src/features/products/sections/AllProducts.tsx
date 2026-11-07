import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import ProductCatalogCard from "../components/ProductCatalogCard";
import ProductFilters from "../components/ProductFilters";
import type {
  Product,
  ProductsFilterParams,
  ProductsPaginationMeta,
} from "../models/products.model";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AllProducts({
  products,
  meta,
  filters = {},
}: {
  products?: Product[];
  meta?: ProductsPaginationMeta;
  filters?: ProductsFilterParams;
}) {
  const t = useTranslations("AllProducts");
  const productList = products ?? [];

  const currentPage = meta?.current_page ?? 1;
  const lastPage = meta?.last_page ?? 1;
  const hasMore = meta?.has_more ?? false;

  const buildPageUrl = (page: number) => {
    const params = new URLSearchParams();
    if (filters.category && filters.category !== "all") {
      params.set("category", filters.category);
    }
    if (filters.popular) {
      params.set("popular", String(filters.popular));
    }
    if (filters.sort) {
      params.set("sort", filters.sort);
    }
    if (filters.search) {
      params.set("search", filters.search);
    }
    if (page > 1) {
      params.set("page", String(page));
    }
    const qs = params.toString();
    return `/products${qs ? `?${qs}` : ""}`;
  };

  return (
    <div className="container mt-14 mb-28 mx-auto px-6 md:px-8 lg:px-6">
      <div className="flex items-center justify-between mb-6">
        <Badge className="text-base h-12 px-4 border-[#0D73771A] text-black gap-2 font-medium [&>svg]:size-4!">
          {t("badge")}
        </Badge>
        {meta && meta.total > 0 && (
          <span className="text-xs font-semibold text-[#6B6B80]">
            {t("totalCount", { total: meta.total })}
          </span>
        )}
      </div>

      {/* Interactive Filters Bar */}
      <ProductFilters
        currentCategory={filters.category}
        currentSort={filters.sort}
        currentSearch={filters.search}
        isPopularOnly={Boolean(filters.popular)}
      />

      {/* Products Grid */}
      {productList.length > 0 ? (
        <div
          className="grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
          mt-5"
        >
          {productList.map((product) => (
            <ProductCatalogCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 px-4 rounded-3xl bg-white border border-black/8 my-8">
          <p className="text-lg font-bold text-black">{t("empty.title")}</p>
          <p className="text-sm font-medium text-muted-foreground mt-2 max-w-sm mx-auto">
            {t("empty.description")}
          </p>
          {(filters.category || filters.search || filters.popular) && (
            <Button
              variant="outline"
              className="mt-6 rounded-2xl"
              render={<Link href="/products">{t("empty.clearFilters")}</Link>}
              nativeButton={false}
            />
          )}
        </div>
      )}

      {/* Pagination Bar */}
      {meta && lastPage > 1 && (
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            disabled={currentPage <= 1}
            className="rounded-xl px-4 text-xs font-semibold"
            render={
              currentPage > 1 ? (
                <Link href={buildPageUrl(currentPage - 1)}>{t("pagination.prev")}</Link>
              ) : undefined
            }
            nativeButton={currentPage <= 1}
          >
            {t("pagination.prev")}
          </Button>

          <span className="text-xs font-medium text-[#6B6B80]">
            {t("pagination.pageOf", { current: currentPage, total: lastPage })}
          </span>

          <Button
            variant="outline"
            disabled={!hasMore && currentPage >= lastPage}
            className="rounded-xl px-4 text-xs font-semibold"
            render={
              currentPage < lastPage ? (
                <Link href={buildPageUrl(currentPage + 1)}>{t("pagination.next")}</Link>
              ) : undefined
            }
            nativeButton={!hasMore && currentPage >= lastPage}
          >
            {t("pagination.next")}
          </Button>
        </div>
      )}
    </div>
  );
}
