"use client";

import { MouseEvent, useContext, useEffect, useState } from "react";
import { Review } from "../../../types/Review";
import ReviewComponent from "./Review";
import { approveReview } from "../../lib/adminUtils";
import { MessageContext } from "../../contexts/MessageContext";
import { useRouter } from "next/navigation";

export default function ReviewListComponent({
  reviews,
}: {
  reviews: Review[];
}) {
  const router = useRouter();
  const { showMessage } = useContext(MessageContext);
  const [isAdmin, setIsAdmin] = useState(false);

  // Set isAdmin on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAdmin(window.location.pathname.includes("admin"));
    }
  }, []);
  const handleDelete = (e: MouseEvent) => {
    e.preventDefault();
    setIsAdmin(!isAdmin);
  };
  const handleApprove = async (reviewId: number) => {
    try {
      await approveReview(reviewId);
      showMessage("Review approved successfully", "success");
    } catch (e: unknown) {
      if (e instanceof Error) {
        showMessage(e.message, "error");
      } else {
        showMessage("An unknown error occurred.", "error");
      }
    } finally {
      router.refresh();
    }
  };
  return reviews.map((review: Review) => (
    <div
      className="w-1/2 shadow-lg border-2 rounded p-5 bg-gray-100"
      key={review.id}
    >
      <ReviewComponent key={review.id} review={review} />
      {isAdmin && (
        <div className="w-full my-2 mx-auto">
          {review.status !== "APPROVED" && (
            <button
              type="button"
              className="submit-btn"
              onClick={(event: MouseEvent) => {
                event.preventDefault();
                handleApprove(review.id);
              }}
            >
              Approve
            </button>
          )}
          <button
            type="button"
            className="w-full text-white font-bold bg-red-500 hover:bg-red-900 cursor-pointer p-2 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  ));
}
