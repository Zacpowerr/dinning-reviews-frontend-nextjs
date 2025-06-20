import BackButton from "../../../app/components/BackButton";
import ReviewListComponent from "../../../app/components/review/ReviewList";
import UserComponent from "../../../app/components/user/User";
import { getUser } from "../../../app/lib/userUtils";
import NotFound from "../../../app/not-found";
import { Metadata } from "next";
import { getReviewsByUser } from "../../lib/reviewUtils";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Reviews | Dinning Reviews",
  description: "Discover and review the best dining experiences.",
};
export default async function RestaurantPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  const user = await getUser(username);

  if (!user) {
    return <NotFound target="/users" />;
  }
  const reviews = await getReviewsByUser(user.userName);
  return (
    <main className="container">
      <UserComponent user={user} />
      <h2 className="text-indigo-700 font-extrabold mb-2">Reviews:</h2>
      <ReviewListComponent reviews={reviews} />
      <BackButton target={"/users"} />
    </main>
  );
}
