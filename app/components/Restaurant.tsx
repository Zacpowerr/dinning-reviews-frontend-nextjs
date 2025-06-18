import { Restaurant } from "@/types/Restaurant";
import Link from "next/link";
import React from "react";

type RestaurantListProps = {
  restaurant: Restaurant;
};

const RestaurantComponent: React.FC<RestaurantListProps> = ({ restaurant }) => (
  <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center">
    <header className="mb-10 text-center">
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
        {restaurant.name}
      </h1>
    </header>
    <div>{restaurant.eggScore}</div>
    <div>{restaurant.dairyScore}</div>
    <div>{restaurant.peanutScore}</div>
    <div>{restaurant.overallScore}</div>
    <Link href={"/restaurants/${restaurant.id}/reviews"}>
      <button className="w-full py-2 bg-blue-500 hover:bg-blue-700">
        View Reviews
      </button>
    </Link>
  </main>
);

export default RestaurantComponent;
