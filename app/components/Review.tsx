import { Review } from "@/types/Review";

export default function ReviewComponent({ review }: { review: Review }) {
  return (
    <li>
      <p>{review.userName}</p>
      <p>{review.details}</p>
      <p>{review.eggScore}</p>
      <p>{review.peanutScore}</p>
      <p>{review.dairyScore}</p>
    </li>
  );
}
