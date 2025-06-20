import React from "react";
import { Restaurant } from "../../../types/Restaurant";

type RestaurantListProps = {
  restaurant: Restaurant;
};

const RestaurantComponent: React.FC<RestaurantListProps> = ({ restaurant }) => (
  <>
    <div className="mb-10 mx-auto">
      <h1 className="">{restaurant.name}</h1>
    </div>
    <h2>Overview:</h2>
    <p className="text-indigo-700 font-bold pl-2">
      Egg Score: {restaurant.eggScore}
    </p>
    <p className="text-indigo-700 font-bold pl-2">
      Dairy Score: {restaurant.dairyScore}
    </p>
    <p className="text-indigo-700 font-bold pl-2">
      Peanut Score: {restaurant.peanutScore}
    </p>
    <p className="text-indigo-700 font-bold pl-2">
      Overall Score: {restaurant.overallScore}
    </p>
  </>
);

export default RestaurantComponent;
