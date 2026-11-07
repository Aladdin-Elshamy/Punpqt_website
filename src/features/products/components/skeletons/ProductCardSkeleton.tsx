import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="rounded-3xl border border-black/6 bg-white p-6 shadow-sm space-y-4">
      <Skeleton className="h-6 w-1/2 rounded-md" />
      <Skeleton className="h-4 w-3/4 rounded-md" />
      <div className="pt-10 flex justify-between items-end">
        <Skeleton className="h-4 w-24 rounded-md" />
        <Skeleton className="h-16 w-16 rounded-xl" />
      </div>
    </div>
  );
}

