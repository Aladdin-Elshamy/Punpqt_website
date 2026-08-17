import { Card, CardContent } from "@/components/ui/card";
import PrinterProductCard from "@/features/specific-printer/components/PrinterProductCard";

const products = [
  {
    title: "Premium Business Cards",
    description:
      "High-quality business cards with various finishing options including matt/gloss lamination, spot UV, and embossing.",
    startingPrice: "EGP 250",
    turnaround: "2-3 days",
    minimumOrder: "500 pcs",
  },
  {
    title: "Premium Business Cards",
    description:
      "High-quality business cards with various finishing options including matt/gloss lamination, spot UV, and embossing.",
    startingPrice: "EGP 250",
    turnaround: "2-3 days",
    minimumOrder: "500 pcs",
  },
  {
    title: "Premium Business Cards",
    description:
      "High-quality business cards with various finishing options including matt/gloss lamination, spot UV, and embossing.",
    startingPrice: "EGP 250",
    turnaround: "2-3 days",
    minimumOrder: "500 pcs",
  },
  {
    title: "Premium Business Cards",
    description:
      "High-quality business cards with various finishing options including matt/gloss lamination, spot UV, and embossing.",
    startingPrice: "EGP 250",
    turnaround: "2-3 days",
    minimumOrder: "500 pcs",
  },
  {
    title: "Premium Business Cards",
    description:
      "High-quality business cards with various finishing options including matt/gloss lamination, spot UV, and embossing.",
    startingPrice: "EGP 250",
    turnaround: "2-3 days",
    minimumOrder: "500 pcs",
  },
  {
    title: "Corporate Brochures",
    description:
      "High-quality business cards with various finishing options including matt/gloss lamination, spot UV, and embossing.",
    startingPrice: "EGP 250",
    turnaround: "2-3 days",
    minimumOrder: "500 pcs",
  },
];

export default function ProductsServices() {
  return (
    <section className="container mx-auto px-6 py-10 md:px-8 lg:px-6">
      <Card className="rounded-3xl border-border/80! py-0 shadow-sm">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Products & Services
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <PrinterProductCard
                key={`${product.title}-${index}`}
                {...product}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}