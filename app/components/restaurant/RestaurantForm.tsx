"use client";

import { useContext, useState } from "react";
import { MessageContext } from "../../contexts/MessageContext";
import { createRestaurant } from "../../lib/restaurantUtils";

export default function RestaurantForm() {
  const { showMessage } = useContext(MessageContext);
  const [form, setForm] = useState({ name: "", zipCode: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createRestaurant({
        name: form.name,
        zipCode: form.zipCode,
      });
      showMessage("Restaurant was created successfully", "success");
    } catch (e: unknown) {
      if (e instanceof Error) {
        showMessage(e.message, "error");
      } else {
        showMessage("An unknown error occurred.", "error");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
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
      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}
