import { Card, CardContent } from "@/components/ui/card";
import Image, { type StaticImageData } from "next/image";

interface PortfolioGalleryCardProps {
  image: StaticImageData;
  title: string;
  category: string;
}

export default function PortfolioGalleryCard({
  image,
  title,
  category,
}: PortfolioGalleryCardProps) {
  return (
    <article className="font-semibold">
      <Card className="aspect-[1.12] overflow-hidden rounded-3xl border-border/80 py-0 shadow-[inset_0_0_8px_rgba(0,0,0,0.08)]">
        <CardContent className="relative h-full p-5 sm:p-7">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-5 sm:p-7"
            sizes="(max-width: 767px) calc(100vw - 5rem), (max-width: 1279px) calc(50vw - 4rem), 22rem"
          />
        </CardContent>
      </Card>

      <h3 className="mt-4 text-xl leading-tight text-foreground">
        {title}
      </h3>
      <p className="mt-1 text-base text-muted-foreground">
        {category}
      </p>
    </article>
  );
}