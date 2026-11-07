import { Skeleton } from "@/components/ui/skeleton";

export default function FeatureCardSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <Skeleton className="size-16 rounded-2xl mb-3.5" />
      <Skeleton className="h-6 w-3/4 rounded-md mb-2" />
      <Skeleton className="h-4 w-full rounded-md" />
      <Skeleton className="h-4 w-2/3 rounded-md mt-1" />
    </div>
  );
}

