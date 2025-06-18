import { Restaurant } from "@/types/Restaurant";
import { Review } from "@/types/Review";

const serverUrl: string = process.env.API_URL ?? "";
const backendServiceUrl: string = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function getRestaurants() {
  try {
    const restaurantApiResponse = await fetch(`${serverUrl}/restaurants`);
    if (!restaurantApiResponse.ok) return [];
    const restaurants = (await restaurantApiResponse.json()) as Restaurant[];
    return restaurants;
  } catch (e) {
    console.error(e);
    // Return empty array if fetch fails (e.g., during build)
    return [];
  }
}

export async function getRestaurantById(id: number) {
  try {
    const restaurantApiResponse = await fetch(`${serverUrl}/restaurants/${id}`);
    if (!restaurantApiResponse.ok) return null as unknown as Restaurant;
    const restaurant = (await restaurantApiResponse.json()) as Restaurant;
    return restaurant;
  } catch (e) {
    console.error(e);
    // Return empty array if fetch fails (e.g., during build)
    return null as unknown as Restaurant;
  }
}

export async function createRestaurant(
  restaurant: Partial<Restaurant>
): Promise<Restaurant> {
  const restaurantApiResponse = await fetch(
    `${backendServiceUrl}/restaurants`,
    {
      method: "POST",
      body: JSON.stringify(restaurant),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!restaurantApiResponse.ok) {
    throw new Error(restaurantApiResponse.statusText);
  }
  const newRestaurant = (await restaurantApiResponse.json()) as Restaurant;
  return newRestaurant;
}
export async function getRestaurantReviews(id: number): Promise<Review[]> {
  try {
    const reviewsApiResponse = await fetch(
      `${serverUrl}/restaurants/${id}/reviews`
    );
    if (!reviewsApiResponse.ok) return [];
    const reviews = (await reviewsApiResponse.json()) as Review[];
    return reviews;
  } catch (e) {
    console.error(e);
    return [];
  }
}
