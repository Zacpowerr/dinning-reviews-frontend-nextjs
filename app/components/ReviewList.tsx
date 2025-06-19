import { Review } from "@/types/Review";
import ReviewComponent from "./Review";
import { getReviewsByRestaurantId } from "../lib/reviewUtils";
import Link from "next/link";

export default async function ReviewListComponent({ id }: { id: number }) {
  const reviews = await getReviewsByRestaurantId(id);

  return (
    <>
      <h2 className="text-indigo-700 font-extrabold mb-2">Reviews:</h2>
      <Link href={`/restaurants/${id}/reviews/new`}>
        <button
          type="button"
          className="w-full text-white font-bold bg-green-500 hover:bg-green-900 cursor-pointer p-2 rounded"
        >
          New Review
        </button>
      </Link>
      <div className="flex flex-row no-wrap justify-start items-start shadow-lg border-2 rounded w-1/3 p-5 bg-gray-100">
        {reviews.map((review: Review) => (
          <ReviewComponent key={review.id} review={review} />
        ))}
      </div>
    </>
  );
}
