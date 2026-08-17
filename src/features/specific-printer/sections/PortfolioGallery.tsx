import brochuresImage from "@/assets/images/brochures.png";
import businessCardsImage from "@/assets/images/buisness-cards-2.png";
import notebookImage from "@/assets/images/notebook.png";
import { Card, CardContent } from "@/components/ui/card";
import PortfolioGalleryCard from "@/features/specific-printer/components/PortfolioGalleryCard";

const portfolioItems = [
  {
    image: businessCardsImage,
    title: "Premium Business Cards",
    category: "Business Cards",
  },
  {
    image: businessCardsImage,
    title: "Premium Business Cards",
    category: "Business Cards",
  },
  {
    image: businessCardsImage,
    title: "Premium Business Cards",
    category: "Business Cards",
  },
  {
    image: brochuresImage,
    title: "Luxury Wedding Invitations",
    category: "Invitations",
  },
  {
    image: notebookImage,
    title: "Corporate Notebook",
    category: "Notebook",
  },
];

export default function PortfolioGallery() {
  return (
    <section className="container mx-auto px-6 py-10 md:px-8 lg:px-6">
      <Card className="rounded-3xl border-border/80 py-0 shadow-sm">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Portfolio Gallery
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {portfolioItems.map((item) => (
              <PortfolioGalleryCard key={item.title} {...item} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}