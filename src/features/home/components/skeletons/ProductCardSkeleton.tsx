import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-black/8 bg-white p-4 shadow-xs">
      <Skeleton className="size-20 shrink-0 rounded-xl" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-3/4 rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-1/3 rounded-md mt-2" />
      </div>
    </div>
  );
}

