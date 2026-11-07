import { Skeleton } from "@/components/ui/skeleton";

export default function PopularProductSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm p-4 space-y-3">
      <Skeleton className="h-28 w-full rounded-xl" />
      <Skeleton className="h-4 w-3/4 rounded-md" />
      <Skeleton className="h-3 w-full rounded-md" />
    </div>
  );
}

