import type {
  Product,
  ProductsApiResponse,
  ProductsFilterParams,
  ProductsPaginationMeta,
} from "../models/products.model";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api-punqt.plana.company/api/v1";

export interface ProductsFetchResult {
  products: Product[];
  meta: ProductsPaginationMeta;
}

export async function getProducts(
  filters: ProductsFilterParams = {},
  locale: string = "ar",
): Promise<ProductsFetchResult> {
  try {
    const params = new URLSearchParams();

    if (filters.category && filters.category !== "all") {
      params.set("category", filters.category);
    }
    if (filters.popular !== undefined && filters.popular !== null && filters.popular !== "") {
      params.set("popular", String(filters.popular));
    }
    if (filters.sort) {
      params.set("sort", filters.sort);
    }
    if (filters.search) {
      params.set("search", filters.search);
    }
    if (filters.page) {
      params.set("page", String(filters.page));
    }

    const queryString = params.toString();
    const endpoint = `${API_BASE_URL}/products${queryString ? `?${queryString}` : ""}`;

    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        "Accept-Language": locale,
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      console.error(
        `[getProducts] Failed with status ${response.status}: ${response.statusText}`,
      );
      return {
        products: [],
        meta: {
          current_page: 1,
          per_page: 12,
          total: 0,
          last_page: 1,
          has_more: false,
        },
      };
    }

    const payload: ProductsApiResponse = await response.json();
    if (!payload.status || !Array.isArray(payload.data)) {
      console.warn("[getProducts] Unexpected payload structure:", payload);
      return {
        products: [],
        meta: {
          current_page: 1,
          per_page: 12,
          total: 0,
          last_page: 1,
          has_more: false,
        },
      };
    }

    return {
      products: payload.data,
      meta: payload.meta || {
        current_page: 1,
        per_page: payload.data.length,
        total: payload.data.length,
        last_page: 1,
        has_more: false,
      },
    };
  } catch (error) {
    console.error("[getProducts] Network or parsing error:", error);
    return {
      products: [],
      meta: {
        current_page: 1,
        per_page: 12,
        total: 0,
        last_page: 1,
        has_more: false,
      },
    };
  }
}

export async function getPopularProducts(
  locale: string = "ar",
): Promise<Product[]> {
  const result = await getProducts({ popular: 1 }, locale);
  return result.products;
}

