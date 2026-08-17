import { Star } from "lucide-react";

type RatingBarProps = {
  stars: number;
  percentage: number;
};

export default function RatingBar({
  stars,
  percentage,
}: RatingBarProps) {
  return (
    <div className="grid grid-cols-[38px_minmax(0,1fr)_38px] items-center gap-3">
      <span className="flex items-center gap-1 text-xs font-semibold text-black">
        {stars}
        <Star className="size-3 fill-amber-400 text-amber-400" />
      </span>
      <div
        role="progressbar"
        aria-label={`${stars} star reviews`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        className="h-2 overflow-hidden rounded-full bg-muted"
      >
        <div
          className="h-full rounded-full bg-amber-400"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-end text-xs font-semibold text-black">
        {percentage}%
      </span>
    </div>
  );
}