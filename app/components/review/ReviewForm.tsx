"use client";
import { Review } from "../../../types/Review";
import { useContext, useState } from "react";
import { createReview, updateReview } from "../../lib/reviewUtils";
import { MessageContext } from "../../contexts/MessageContext";
import { useParams } from "next/navigation";

type defaultValuesType = {
  userName: string;
  restaurantId: number;
  peanutScore: number;
  eggScore: number;
  dairyScore: number;
  details: string;
};

export default function ReviewForm({
  action = "create",
  defaultValues,
}: {
  action?: "create" | "update";
  defaultValues?: defaultValuesType;
}) {
  const params = useParams();
  const { showMessage } = useContext(MessageContext);
  const initialForm: Partial<Review> = {
    userName: defaultValues?.userName,
    restaurantId: Number(params.id),
    peanutScore: defaultValues?.peanutScore,
    eggScore: defaultValues?.eggScore,
    dairyScore: defaultValues?.dairyScore,
    details: defaultValues?.details,
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
      if (action == "create") {
        await createReview(form);
        showMessage("Review was successfully created", "success");
      } else {
        await updateReview(form);
        showMessage("Review was successfully updated", "success");
      }
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
  );
}
