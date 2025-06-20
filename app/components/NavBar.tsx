import React from "react";

const navItems = ["Home", "Users", "Restaurants", "Admin"];

const NavBar: React.FC = () => (
  <nav className="w-full bg-white shadow">
    <ul className="flex justify-around items-center py-4">
      {navItems.map((item) => (
        <li key={item}>
          <a
            href={`/${item.toLowerCase()}`}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
