import Head from "next/head";
import RestaurantComponent from "../../components/Restaurant";
import { getRestaurantById } from "../../lib/restaurantUtils";
import BackButton from "@/app/components/BackButton";

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
      <main>
        {restaurant && <RestaurantComponent restaurant={restaurant} />}
        {restaurant && <ReviewListComponent restaurant={restaurant} />}
        <BackButton target={"/restaurants"} />
      </main>
    </>
  );
}
