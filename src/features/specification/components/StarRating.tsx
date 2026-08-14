import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
};

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <span
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={
            index < rating
              ? "size-3.5 fill-amber-400 text-amber-400"
              : "size-3.5 text-muted-foreground/30"
          }
        />
      ))}
    </span>
  );
}