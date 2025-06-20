import { getAllUsers } from "../lib/userUtils";
import UserList from "../components/user/UserList";
import UserForm from "../components/user/UserForm";
import { Metadata } from "next";

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
      <UserForm />
    </main>
  );
}
