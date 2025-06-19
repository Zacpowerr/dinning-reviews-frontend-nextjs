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
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center">
        {/* <div id="error-popover"></div> */}
        <RestaurantList restaurants={restaurants} />
        <Link href={"restaurants/new"}>
          <button className="w-full text-white font-bold bg-green-500 hover:bg-green-900 cursor-pointer p-2 rounded">
            New Restaurant
          </button>
        </Link>
      </main>
    </>
  );
}
