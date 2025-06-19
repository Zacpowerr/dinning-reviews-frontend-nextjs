import { Review } from "@/types/Review";

export default function ReviewComponent({ review }: { review: Review }) {
  return (
    <div className="text-indigo-700 font-bold">
      <p>User:{review.userName}</p>
      <p>Comments: {review.details}</p>
      <p>Egg Score: {review.eggScore}</p>
      <p>Peanut Score: {review.peanutScore}</p>
      <p>Dairy Score: {review.dairyScore}</p>
    </div>
  );
}
