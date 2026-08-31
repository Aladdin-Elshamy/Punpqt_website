import ProductCatalogView from "./ProductCatalogView";
import Filter from "../components/Filter";
import { CatalogState } from "../models/types";

interface BrowseProductCardsProps {
  catalogState: CatalogState;
  productSlug: string;
}

export default function BrowseProductCards({
  catalogState,
  productSlug,
}: BrowseProductCardsProps) {
  return (
    <div className="container mx-auto px-6 md:px-8 lg:px-6 relative z-10 flex items-start gap-6 mb-20">
      <Filter className="hidden lg:block shrink-0" />
      <ProductCatalogView
        catalogState={catalogState}
        productSlug={productSlug}
      />
    </div>
  );
}
