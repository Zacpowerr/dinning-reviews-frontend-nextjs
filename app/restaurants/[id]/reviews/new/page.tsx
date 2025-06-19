"use client";

import React, { useState } from "react";
import BackButton from "@/app/components/BackButton";
import { Review } from "@/types/Review";
import { useParams } from "next/navigation";
import { createReview } from "@/app/lib/reviewUtils";

export default function NewReviewPage() {
  const params = useParams();
  const id = params.id; // This will be a string

  const initialForm: Partial<Review> = {
    userName: "",
    restaurantId: Number(id),
    peanutScore: 0,
    eggScore: 0,
    dairyScore: 0,
    details: "",
  };
  const [form, setForm] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const review = await createReview(form);
      console.log("REVIEW", review);
      alert(
        `Review by: ${review.userName}\nRestaurant ID: ${review.restaurantId}\nPeanut Score: ${review.peanutScore}\nEgg Score: ${review.eggScore}\nDairy Score: ${review.dairyScore}\nDetails: ${review.details}`
      );
    } catch (e) {
      alert("ERROR" + e);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-black">Add New Review</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium text-black"
            >
              Your Name
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              value={form.userName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="restaurantId"
              className="block text-sm font-medium text-black"
            >
              Restaurant ID
            </label>
            <input
              id="restaurantId"
              name="restaurantId"
              type="number"
              value={form.restaurantId}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
            />
          </div>
          <div>
            <label
              htmlFor="peanutScore"
              className="block text-sm font-medium text-black"
            >
              Peanut Score
            </label>
            <input
              id="peanutScore"
              name="peanutScore"
              type="number"
              min={0}
              max={5}
              value={form.peanutScore}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="eggScore"
              className="block text-sm font-medium text-black"
            >
              Egg Score
            </label>
            <input
              id="eggScore"
              name="eggScore"
              type="number"
              min={0}
              max={5}
              value={form.eggScore}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="dairyScore"
              className="block text-sm font-medium text-black"
            >
              Dairy Score
            </label>
            <input
              id="dairyScore"
              name="dairyScore"
              type="number"
              min={0}
              max={5}
              value={form.dairyScore}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="details"
              className="block text-sm font-medium text-black"
            >
              Details
            </label>
            <textarea
              id="details"
              name="details"
              value={form.details}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
      <BackButton target={`/restaurants/${params.id}`} />
    </main>
  );
}
