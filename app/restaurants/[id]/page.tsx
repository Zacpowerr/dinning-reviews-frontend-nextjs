import Head from "next/head";
import RestaurantComponent from "../../components/Restaurant";
import { getRestaurantById } from "../../lib/restaurantUtils";
import BackButton from "@/app/components/BackButton";
import ReviewListComponent from "@/app/components/ReviewList";

export const dynamic = "force-dynamic";
export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const restaurant = await getRestaurantById(Number(id));

  return (
    <>
      <Head>
        <title>Restaurant | Dinning Reviews</title>
        <meta
          name="description"
          content="Discover and review the best dining experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-around justify-center">
        {restaurant && <RestaurantComponent restaurant={restaurant} />}
        {restaurant && <ReviewListComponent id={restaurant.id} />}
        <BackButton target={"/restaurants"} />
      </main>
    </>
  );
}
