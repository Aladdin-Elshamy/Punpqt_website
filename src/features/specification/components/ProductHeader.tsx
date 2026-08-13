import Check from "@/shared/icons/Check";
import { Heart, Star } from "lucide-react";
import Link from "next/link";

export default function ProductHeader() {
  return (
    <header className="space-y-2">
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs font-medium text-muted-foreground">
          by{" "}
          <span className="font-semibold">Elite Printing Co.</span>{" "}
          ·{" "}
          <Link href="#" className="font-semibold text-primary hover:underline">
            View storefront
          </Link>
        </p>

        <button
          type="button"
          aria-label="Add to wishlist"
          className="shrink-0 text-primary transition-colors hover:text-primary/75"
        >
          <Heart className="size-5" />
        </button>
      </div>

      <h1 className="text-2xl font-bold leading-tight">
        Premium Business Cards
      </h1>

      <div className="flex flex-wrap items-center gap-5 text-sm font-semibold">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-0.5 text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-3.5 fill-current" />
            ))}
          </span>
          <span>4.8</span>
          <span className="text-muted-foreground">(1,240 reviews)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-primary">
            <Check className="size-4" />
            Verified Printer
          </div>
        </div>
      </div>
    </header>
  );
}