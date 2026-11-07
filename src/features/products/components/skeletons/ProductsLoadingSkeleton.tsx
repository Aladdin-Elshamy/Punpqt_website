import { Skeleton } from "@/components/ui/skeleton";
import PopularProductSkeleton from "./PopularProductSkeleton";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ProductsLoadingSkeleton() {
  return (
    <div className="space-y-16 py-12 animate-pulse">
      {/* Hero Skeleton */}
      <div className="container mx-auto px-6 space-y-4">
        <Skeleton className="h-6 w-36 rounded-md" />
        <Skeleton className="h-12 w-64 rounded-xl" />
        <Skeleton className="h-5 w-96 max-w-full rounded-md" />
      </div>

      {/* Popular Products Skeleton */}
      <div className="container mx-auto px-6 space-y-6">
        <Skeleton className="h-10 w-44 rounded-xl" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <PopularProductSkeleton />
          <PopularProductSkeleton />
          <PopularProductSkeleton />
          <PopularProductSkeleton />
        </div>
      </div>

      {/* All Products Skeleton */}
      <div className="container mx-auto px-6 space-y-6">
        <Skeleton className="h-10 w-40 rounded-xl" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

