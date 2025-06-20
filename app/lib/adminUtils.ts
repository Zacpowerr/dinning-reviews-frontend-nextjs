import { Review } from "../../types/Review";
import { backendServiceUrl } from "./configUtils";

export async function approveReview(reviewId: number): Promise<Review> {
  const approvalApiResponse = await fetch(
    `${backendServiceUrl}/admin/${reviewId}/approve`,
    {
      method: "POST",
    }
  );
  if (!approvalApiResponse.ok) {
    const errorMessage = await approvalApiResponse.json();
    throw new Error(errorMessage.message);
  }
  const approvedReview = (await approvalApiResponse.json()) as Review;
  return approvedReview;
}
