import React from "react";
import { User } from "../../../types/User";
import Link from "next/link";

type UserListProps = {
  users: User[];
};

const UserList: React.FC<UserListProps> = ({ users }) => (
  <>
    <header className="mb-10 text-center">
      <h1 className="">Users</h1>
    </header>
    <ul>
      {users.map((user) => (
        <li key={user.userName} className="">
          <li
            key={user.userName}
            className="mb-2 text-lg font-medium text-indigo-900"
          >
            <Link href={`users/${user.userName}`}>{user.userName}</Link>
          </li>
        </li>
      ))}
    </ul>
  </>
);

export default UserList;
