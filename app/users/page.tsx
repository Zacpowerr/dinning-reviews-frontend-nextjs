import { getAllUsers } from "../lib/userUtils";
import UserList from "../components/user/UserList";
import { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Users | Dinning Reviews",
  description: "Discover and review the best dining experiences.",
};

export default async function UsersPage() {
  const users = await getAllUsers();

  return (
    <main className="container">
      <UserList users={users} />
      <Link href="/users/new">
        <button type="button" className="submit-btn">
          Create User
        </button>
      </Link>
    </main>
  );
}
