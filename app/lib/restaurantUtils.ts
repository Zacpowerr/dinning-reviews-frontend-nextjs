import { Restaurant } from "@/types/Restaurant";
import { backendServiceUrl, serverUrl } from "./configUtils";

export async function getRestaurants(): Promise<Restaurant[]> {
  try {
    const restaurantApiResponse = await fetch(`${serverUrl}/restaurants`);
    if (!restaurantApiResponse.ok) return [];
    const restaurants = (await restaurantApiResponse.json()) as Restaurant[];
    return restaurants;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getRestaurantById(id: number): Promise<Restaurant> {
  try {
    const restaurantApiResponse = await fetch(`${serverUrl}/restaurants/${id}`);
    if (!restaurantApiResponse.ok) return null as unknown as Restaurant;
    const restaurant = (await restaurantApiResponse.json()) as Restaurant;
    return restaurant;
  } catch (e) {
    console.error(e);
    return null as unknown as Restaurant;
  }
}

export async function createRestaurant(
  restaurantToCreate: Partial<Restaurant>
): Promise<Restaurant> {
  const restaurantApiResponse = await fetch(
    `${backendServiceUrl}/restaurants`,
    {
      method: "POST",
      body: JSON.stringify(restaurantToCreate),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!restaurantApiResponse.ok) {
    throw new Error(restaurantApiResponse.statusText);
  }
  const restaurant = (await restaurantApiResponse.json()) as Restaurant;
  return restaurant;
}

export async function updateRestaurant(
  restaurantToUpdate: Partial<Restaurant>
): Promise<Restaurant> {
  const restaurantApiResponse = await fetch(
    `${backendServiceUrl}/restaurants/${restaurantToUpdate.id}`,
    {
      method: "PUT",
      body: JSON.stringify(restaurantToUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!restaurantApiResponse.ok) {
    throw new Error(restaurantApiResponse.statusText);
  }
  const restaurant = (await restaurantApiResponse.json()) as Restaurant;
  return restaurant;
}

export async function deleteRestaurant(id: number): Promise<Restaurant> {
  const restaurantApiResponse = await fetch(
    `${backendServiceUrl}/restaurants/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!restaurantApiResponse.ok) {
    throw new Error(restaurantApiResponse.statusText);
  }
  const restaurant = (await restaurantApiResponse.json()) as Restaurant;
  return restaurant;
}

export async function searchRestaurant(
  searchTerms: string[],
  searchValues: string[]
): Promise<Restaurant[]> {
  let apiUrl = backendServiceUrl + "/restaurants/search";
  for (let i = 0; i < searchTerms.length; i++) {
    if (i == 0) {
      apiUrl = apiUrl.concat("?");
    }
    apiUrl = apiUrl.concat(searchTerms[i] + "=" + searchValues[i]);
    if (i !== searchTerms.length - 1) {
      apiUrl = apiUrl.concat("&");
    }
  }
  try {
    const restaurantApiResponse = await fetch(apiUrl);
    if (!restaurantApiResponse.ok) {
      throw new Error(restaurantApiResponse.statusText);
    }
    const restaurants = (await restaurantApiResponse.json()) as Restaurant[];
    return restaurants;
  } catch (e) {
    console.error(e);
    return [];
  }
}
