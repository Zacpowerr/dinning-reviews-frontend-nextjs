import { getRestaurantReviews } from "../lib/restaurantUtils";
import { Review } from "@/types/Review";
import ReviewComponent from "./Review";

export default async function ReviewListComponent(id: string) {
  const reviews = await getRestaurantReviews(Number(id));

  return (
    <ul>
      {reviews.map((review: Review) => (
        <ReviewComponent key={review.id} review={review} />
      ))}
    </ul>
  );
}
