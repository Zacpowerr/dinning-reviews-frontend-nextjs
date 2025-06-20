import RestaurantList from "../components/restaurant/RestaurantList";
import { getRestaurants } from "../lib/restaurantUtils";
import Link from "next/link";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Restaurants | Dinning Reviews",
  description: "Discover and review the best dining experiences.",
};
export default async function RestaurantsPage() {
  const restaurants = await getRestaurants();

  return (
    <main className="container">
      <RestaurantList restaurants={restaurants} />
      <Link href={"restaurants/new"}>
        <button className="submit-btn">New Restaurant</button>
      </Link>
    </main>
  );
}
