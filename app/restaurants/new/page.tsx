"use client";

import BackButton from "@/app/components/BackButton";
import { createRestaurant } from "@/app/lib/restaurantUtils";
import { Restaurant } from "@/types/Restaurant";
import React, { useState } from "react";

export default function NewRestaurantPage() {
  const [form, setForm] = useState({ name: "", zipCode: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const restaurant: Restaurant = await createRestaurant({
        name: form.name,
        zipCode: form.zipCode,
      });
      alert(`Name: ${restaurant.name}\nZip Code: ${restaurant.zipCode}`);
    } catch (e: unknown) {
      if (e instanceof Error) {
        alert(e.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-black">
          Add New Restaurant
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Restaurant Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-gray-700"
            >
              Zip Code
            </label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              value={form.zipCode}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
      <BackButton target={"/restaurants"} />
    </main>
  );
}
