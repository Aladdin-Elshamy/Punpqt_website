import { Skeleton } from "@/components/ui/skeleton";
import FeatureCardSkeleton from "./FeatureCardSkeleton";
import ProductCardSkeleton from "./ProductCardSkeleton";
import PrinterCardSkeleton from "./PrinterCardSkeleton";

export default function HomeLoadingSkeleton() {
  return (
    <div className="space-y-24 py-16 animate-pulse">
      {/* Hero Skeleton */}
      <div className="container mx-auto px-6 space-y-6">
        <Skeleton className="h-8 w-36 rounded-full" />
        <Skeleton className="h-16 w-3/4 max-w-xl rounded-2xl" />
        <Skeleton className="h-6 w-full max-w-md rounded-md" />
        <Skeleton className="h-14 w-full max-w-2xl rounded-3xl" />
      </div>

      {/* Features Skeleton */}
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border p-8 bg-[#FCFCFC]">
          <div className="text-center space-y-2 mb-8">
            <Skeleton className="h-8 w-64 mx-auto rounded-md" />
            <Skeleton className="h-4 w-96 mx-auto rounded-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCardSkeleton />
            <FeatureCardSkeleton />
            <FeatureCardSkeleton />
          </div>
        </div>
      </div>

      {/* Popular Products Skeleton */}
      <div className="container mx-auto px-6 space-y-8">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <Skeleton className="h-6 w-32 rounded-md" />
            <Skeleton className="h-10 w-64 rounded-md" />
          </div>
          <Skeleton className="h-6 w-24 rounded-md" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4 h-96">
          <Skeleton className="xl:col-span-7 rounded-3xl h-full" />
          <Skeleton className="xl:col-span-5 rounded-3xl h-full" />
        </div>
      </div>

      {/* Category / Products Skeleton */}
      <div className="bg-[#FAFAFA] py-20">
        <div className="container mx-auto px-6 space-y-8">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <Skeleton className="h-6 w-32 rounded-md" />
              <Skeleton className="h-10 w-64 rounded-md" />
            </div>
            <Skeleton className="h-6 w-24 rounded-md" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Printers Skeleton */}
      <div className="container mx-auto px-6 space-y-8">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <Skeleton className="h-6 w-32 rounded-md" />
            <Skeleton className="h-10 w-64 rounded-md" />
          </div>
          <Skeleton className="h-6 w-24 rounded-md" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <PrinterCardSkeleton />
          <PrinterCardSkeleton />
          <PrinterCardSkeleton />
        </div>
      </div>
    </div>
  );
}

