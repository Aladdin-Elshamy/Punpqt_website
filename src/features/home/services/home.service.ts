import type { HomeApiResponse, HomeData } from "../types/model";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getHomeData(
  locale: string = "ar",
): Promise<HomeData | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/home`, {
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
        `[getHomeData] Failed with status ${response.status}: ${response.statusText}`,
      );
      return null;
    }

    const payload: HomeApiResponse = await response.json();
    if (!payload.status || !payload.data) {
      console.warn("[getHomeData] Unexpected payload structure:", payload);
      return null;
    }

    return payload.data;
  } catch (error) {
    console.error("[getHomeData] Network or parsing error:", error);
    return null;
  }
}
