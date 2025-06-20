import BackButton from "../../../app/components/BackButton";
import { Metadata } from "next";
import UserForm from "../../components/user/UserForm";

export const metadata: Metadata = {
  title: "Create User | Dinning Reviews",
  description: "Discover and review the best dining experiences.",
};
export default function NewUserPage() {
  return (
    <main className="container">
      <UserForm />
      <BackButton target={"/users"} />
    </main>
  );
}
