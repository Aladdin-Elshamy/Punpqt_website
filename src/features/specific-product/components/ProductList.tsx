import ProductGridCard from "./ProductGridCard";
import ProductRowCard from "./ProductRowCard";

export interface ProductListProps {
  view: "grid" | "list";
  productSlug: string;
  products?: Array<unknown>;
}

export default function ProductList({
  view,
  productSlug,
  products = [1, 2, 3, 4, 5, 6],
}: ProductListProps) {
  if (view === "grid") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((_, index) => (
          <ProductGridCard key={index} productSlug={productSlug} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {products.map((_, index) => (
        <ProductRowCard key={index} />
      ))}
    </div>
  );
}
