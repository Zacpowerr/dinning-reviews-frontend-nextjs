"use client";

import { useEffect, useState } from "react";
import ReviewListComponent from "../../components/review/ReviewList";
import { getPendingReviews } from "../../lib/reviewUtils";
import { Review } from "../../../types/Review";

export default function PendingReviewsPage() {
  const [unapprovedReviews, setUnapprovedReviews] = useState<Review[]>([]);
  useEffect(() => {
    async function fetchPendingReviews() {
      const reviews = await getPendingReviews();
      setUnapprovedReviews(reviews);
    }
    fetchPendingReviews();
  }, []);

  return <ReviewListComponent reviews={unapprovedReviews} />;
}
