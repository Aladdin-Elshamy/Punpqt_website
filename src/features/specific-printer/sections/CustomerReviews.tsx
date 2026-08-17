import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import RatingBar from "@/shared/components/RatingBar";
import ReviewItem, { ReviewItemData } from "@/shared/components/ReviewItem";
import Star from "@/shared/icons/Star";
import { ListFilter } from "lucide-react";


const ratingDistribution = [
  { stars: 5, percentage: 75 },
  { stars: 4, percentage: 20 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 5 },
  { stars: 1, percentage: 5 },
];

const reviews: ReviewItemData[] = [
  {
    initials: "AH",
    name: "Ahmed Hassan",
    date: "Apr 28, 2026",
    rating: 5,
    comment: "Excellent print quality.",
    specification: "Business Cards · 5,000 pcs",
    helpfulCount: 12,
  },
  {
    initials: "SM",
    name: "Sara Mohamed",
    date: "Apr 25, 2026",
    rating: 5,
    comment: "Will order again.",
    specification: "500 pcs · Matte Lamination · 350gsm",
    helpfulCount: 8,
  },
  {
    initials: "MA",
    name: "Mohamed Ali",
    date: "Apr 12, 2026",
    rating: 5,
    comment: "The colors are vibrant and the paper feels premium.",
    specification: "500 pcs · Matte Lamination · 350gsm",
    helpfulCount: 9,
  },
  {
    initials: "FB",
    name: "Fashion Boutique",
    date: "Apr 8, 2026",
    rating: 5,
    comment: "Exactly as described.",
    specification: "500 pcs · Matte Lamination · 350gsm",
    helpfulCount: 11,
  },
];

export default function CustomerReviews() {
  return (
    <section className="container mx-auto px-6 py-10 md:px-8 lg:px-6">
      <Card className="rounded-3xl border-border/80 py-0 shadow-sm">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-semibold text-black">Customer Reviews</h2>
            <div className="flex items-center gap-2 text-sm font-semibold text-black">
              <Star className="size-5 fill-amber-400 text-amber-400" />
              <span>4.9</span>
              <span>(89 reviews)</span>
            </div>
          </div>

          <Card className="mt-6 border-0 bg-muted/50 py-5 shadow-none ring-0">
            <CardContent className="space-y-3 px-5">
              {ratingDistribution.map((rating) => (
                <RatingBar key={rating.stars} {...rating} />
              ))}
            </CardContent>
          </Card>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <Button size="sm" className="rounded-xl h-9 px-4 font-semibold">
              All Reviews
            </Button>
            <Button size="sm" variant="secondary" className="rounded-xl h-9 px-4 font-semibold">
              5 Stars
            </Button>
            <Button size="sm" variant="secondary" className="rounded-xl h-9 px-4 font-semibold">
              4 Stars
            </Button>
            <Button size="sm" variant="secondary" className="rounded-xl h-9 px-4 font-semibold">
              <ListFilter className="size-3.5" />
              More Filters
            </Button>
          </div>

          <div className="mt-1">
            {reviews.map((review, index) => (
              <div key={`${review.name}-${review.date}`}>
                <ReviewItem {...review} />
                {index < reviews.length - 1 && <Separator />}
              </div>
            ))}
          </div>
          <Button variant={"outline"} className={"w-full h-11 font-semibold rounded-2xl text-black border-border hover:text-black/80"}>View All 89 Reviews</Button>
        </CardContent>
      </Card>
    </section>
  );
}