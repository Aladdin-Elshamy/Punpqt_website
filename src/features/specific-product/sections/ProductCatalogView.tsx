import SearchSpecs from "../components/Search";
import ProductList from "../components/ProductList";
import PrinterCard from "../components/PrinterCard";
import CatalogViewClient from "./CatalogViewClient";
import type { CatalogState } from "../models/types";

export interface ProductCatalogViewProps {
  catalogState: CatalogState;
  productSlug: string;
  products?: Array<unknown>;
}

export default async function ProductCatalogView({
  catalogState,
  productSlug,
  products = [1, 2, 3, 4, 5, 6],
}: ProductCatalogViewProps) {
  return (
    <CatalogViewClient
      catalogState={catalogState}
      searchNode={<SearchSpecs catalogState={catalogState} />}
      productsGridNode={
        <ProductList view="grid" productSlug={productSlug} products={products} />
      }
      productsListNode={
        <ProductList view="list" productSlug={productSlug} products={products} />
      }
      printersNode={
        <div className="space-y-4">
          <PrinterCard startingPrice={250} productSlug={productSlug} />
          <PrinterCard productSlug={productSlug} />
        </div>
      }
    />
  );
}
