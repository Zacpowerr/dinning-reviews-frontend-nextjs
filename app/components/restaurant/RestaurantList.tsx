import React from "react";
import Link from "next/link";
import { Restaurant } from "../../../types/Restaurant";

type RestaurantListProps = {
  restaurants: Restaurant[];
};

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => (
  <>
    <header className="mb-10 text-center">
      <h1 className="">Restaurants</h1>
    </header>
    <ul>
      {restaurants.map((restaurant) => (
        <li
          key={restaurant.id}
          className="mb-2 text-lg font-medium text-indigo-900"
        >
          <Link href={`restaurants/${restaurant.id}`}>{restaurant.name}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default RestaurantList;
