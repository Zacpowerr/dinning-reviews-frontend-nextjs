import Head from "next/head";
import RestaurantList from "../components/RestaurantList";
import { getRestaurants } from "../lib/restaurantUtils";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function RestaurantsPage() {
  const restaurants = await getRestaurants();

  return (
    <>
      <Head>
        <title>Restaurants | Dinning Reviews</title>
        <meta
          name="description"
          content="Discover and review the best dining experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id="error-popover">defaulterror</div>
      <main>
        <Link href={"restaurants/new"}>
          <button>New Restaurant</button>
        </Link>
        <RestaurantList restaurants={restaurants} />
      </main>
    </>
  );
}
