"use client";

import { MouseEvent, useEffect, useState } from "react";
import { Review } from "../../../types/Review";
import ReviewComponent from "./Review";

export default function ReviewListComponent({
  reviews,
}: {
  reviews: Review[];
}) {
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
  return (
    <>
      <h2 className="text-indigo-700 font-extrabold mb-2">Reviews:</h2>
      <div className="flex flex-col justify-start items-start gap-y-5">
        {reviews.map((review: Review) => (
          <div
            className="w-full shadow-lg border-2 rounded p-5 bg-gray-100"
            key={review.id}
          >
            {isAdmin && (
              <button
                type="button"
                className="bg-red-500 shadow-md p-2 m-1 text-white rounded place-self-end"
                onClick={handleDelete}
              >
                Delete
              </button>
            )}
            <ReviewComponent key={review.id} review={review} />
          </div>
        ))}
      </div>
    </>
  );
}
