import { User } from "../../../types/User";
import React from "react";

type UserProps = {
  user: User;
};

const UserComponent: React.FC<UserProps> = ({ user }) => (
  <div className="mx-auto text-center">
    <h3 className="text-5xl font-extrabold text-indigo-700">{user.userName}</h3>
    <p>
      {user.city}, {user.state} - {user.zipcode}
    </p>
    <div className="capitalize">
      Allergies:
      {user.hasPeanutAllergy && " Peanut"}
      {user.hasEggAllergy && " Egg"}
      {user.hasDairyAllergy && " Dairy"}
      {!(user.hasPeanutAllergy ?? user.hasEggAllergy ?? user.hasDairyAllergy) &&
        " None"}
    </div>
  </div>
);

export default UserComponent;
