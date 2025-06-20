"use client";

import React, { useContext, useState } from "react";
import { User } from "../../../types/User";
import { createUser } from "../../lib/userUtils";
import { MessageContext } from "../../contexts/MessageContext";
import { useRouter } from "next/navigation";

const initialForm: User = {
  userName: "",
  city: "",
  state: "",
  zipcode: "",
  hasPeanutAllergy: false,
  hasEggAllergy: false,
  hasDairyAllergy: false,
};

const UserForm: React.FC = () => {
  const router = useRouter();
  const { showMessage } = useContext(MessageContext);
  const [form, setForm] = useState<User>(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(form);
      setForm(initialForm);
      router.refresh();
    } catch (e) {
      if (e instanceof Error) {
        showMessage(e.message, "error", 5000);
      } else {
        showMessage("An unknown error occurred", "error", 5000);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="userName"
        placeholder="User Name"
        value={form.userName}
        onChange={handleChange}
        required
      />
      <input
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
        required
      />
      <input
        name="state"
        placeholder="State"
        value={form.state}
        onChange={handleChange}
        required
      />
      <input
        name="zipcode"
        placeholder="Zipcode"
        value={form.zipcode}
        onChange={handleChange}
        required
      />
      <label>
        <input
          type="checkbox"
          name="hasPeanutAllergy"
          checked={form.hasPeanutAllergy}
          onChange={handleChange}
        />{" "}
        Peanut Allergy
      </label>
      <label>
        <input
          type="checkbox"
          name="hasEggAllergy"
          checked={form.hasEggAllergy}
          onChange={handleChange}
        />{" "}
        Egg Allergy
      </label>
      <label>
        <input
          type="checkbox"
          name="hasDairyAllergy"
          checked={form.hasDairyAllergy}
          onChange={handleChange}
        />{" "}
        Dairy Allergy
      </label>
      <button type="submit" className="submit-btn">
        Add User
      </button>
    </form>
  );
};

export default UserForm;
