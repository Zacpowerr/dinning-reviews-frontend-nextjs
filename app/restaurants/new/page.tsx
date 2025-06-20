import BackButton from "../../../app/components/BackButton";
import RestaurantForm from "../../../app/components/restaurant/RestaurantForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Restaurant | Dinning Reviews",
  description: "Discover and review the best dining experiences.",
};
export default function NewRestaurantPage() {
  return (
    <main className="container">
      <RestaurantForm />
      <BackButton target={"/restaurants"} />
    </main>
  );
}
