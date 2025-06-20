import RestaurantComponent from "../../components/restaurant/Restaurant";
import { getRestaurantById } from "../../lib/restaurantUtils";
import BackButton from "../../../app/components/BackButton";
import ReviewListComponent from "../../../app/components/review/ReviewList";
import NotFound from "../../../app/not-found";
import { Metadata } from "next";
import { getReviewsByRestaurantId } from "../../lib/reviewUtils";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Reviews | Dinning Reviews",
  description: "Discover and review the best dining experiences.",
};
export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const restaurant = await getRestaurantById(Number(id));

  if (!restaurant) {
    return <NotFound target="/restaurants" />;
  }
  const reviews = await getReviewsByRestaurantId(restaurant.id);
  return (
    <main className="container">
      {restaurant && <RestaurantComponent restaurant={restaurant} />}
      <Link href={`/restaurants/${restaurant.id}/reviews/new`}>
        <button type="button" className="submit-btn">
          Create Review
        </button>
      </Link>
      {restaurant && (
        <>
          <h2 className="text-indigo-700 font-extrabold mb-2">Reviews:</h2>
          <ReviewListComponent reviews={reviews} />
        </>
      )}
      <BackButton target={"/restaurants"} />
    </main>
  );
}
