import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PrinterCardSkeleton() {
  return (
    <Card className="w-full max-w-xl rounded-[24px] border-0 shadow-sm p-0">
      <CardContent className="space-y-6 p-6">
        <div className="flex items-start justify-between">
          <div className="flex gap-4 items-center">
            <Skeleton className="h-16 w-16 rounded-3xl" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-32 rounded-md" />
              <Skeleton className="h-4 w-24 rounded-md" />
            </div>
          </div>
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Skeleton className="h-20 rounded-2xl" />
          <Skeleton className="h-20 rounded-2xl" />
          <Skeleton className="h-20 rounded-2xl" />
        </div>

        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-12 rounded-full" />
          <Skeleton className="h-12 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}

