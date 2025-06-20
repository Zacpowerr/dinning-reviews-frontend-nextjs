"use client";

import { useEffect, useState } from "react";
import ReviewListComponent from "../components/review/ReviewList";
import { getAllReviews } from "../lib/reviewUtils";
import { Review } from "../../types/Review";

export default function PendingReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  useEffect(() => {
    async function fetchReviews() {
      const reviews = await getAllReviews();
      setReviews(reviews);
    }
    fetchReviews();
  }, []);

  return (
    <div className="container">
      <h2 className="text-indigo-700 font-extrabold mb-2">Reviews:</h2>
      <ReviewListComponent reviews={reviews} />
    </div>
  );
}
