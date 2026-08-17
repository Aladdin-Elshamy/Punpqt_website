import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import StarRating from "../../features/specification/components/StarRating";
import Check from "@/shared/icons/Check";

export type ReviewItemData = {
    initials: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
    specification: string;
    helpfulCount: number;
};

export default function ReviewItem({
    initials,
    name,
    date,
    rating,
    comment,
    specification,
    helpfulCount,
}: ReviewItemData) {
    return (
        <article className="flex gap-4 py-6">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-primary-foreground"
                style={{ background: "linear-gradient(135deg, #0D7377 0%, #0E757A 7.69%, #0E787C 15.38%, #0F7A7F 23.08%, #0F7C82 30.77%, #107E85 38.46%, #108187 46.15%, #11838A 53.85%, #11858D 61.54%, #128890 69.23%, #128A93 76.92%, #138C95 84.62%, #138F98 92.31%, #14919B 100%)" }}>
                {initials}
            </div>

            <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-black">{name}</h3>
                    <Check className="text-primary" />
                </div>

                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    <StarRating rating={rating} />
                    <span className="text-xs text-muted-foreground">•</span>
                    <time className="text-xs font-medium text-muted-foreground">
                        {date}
                    </time>
                </div>

                <p className="mt-3 text-sm font-semibold text-black">{comment}</p>

                <div className="mt-3 flex flex-wrap items-center gap-3">
                    <Badge
                        variant="secondary"
                        className="rounded-full px-3 h-auto! sm:h-6! font-semibold text-muted-foreground whitespace-pre-wrap"
                    >
                        {specification}
                    </Badge>
                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-7 gap-1.5 px-1 text-xs font-semibold text-black hover:bg-transparent"
                    >
                        <ThumbsUp className="size-3.5" />
                        Helpful ({helpfulCount})
                    </Button>
                </div>
            </div>
        </article>
    );
}