import { Restaurant } from "@/types/Restaurant";
import React from "react";
import Link from "next/link";

type RestaurantListProps = {
  restaurants: Restaurant[];
};

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => (
  <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center">
    <header className="mb-10 text-center">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
        Restaurants
      </h1>
    </header>
    <ul id="restaurant-list">
      {restaurants.map((restaurant) => (
        <li
          key={restaurant.id}
          className="mb-2 text-lg font-medium text-indigo-900"
        >
          <Link href={`restaurants/${restaurant.id}`}>{restaurant.name}</Link>
        </li>
      ))}
    </ul>
  </main>
);

export default RestaurantList;
