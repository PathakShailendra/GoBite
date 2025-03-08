import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Divider from "./Divider";

const UserMenu = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="text-gray-800">
      <div className="font-semibold text-lg">My Account</div>
      <div className="text-sm text-gray-600 mt-1">
        {user.name || user.mobile}
      </div>

      <Divider />

      <Link
        to={""}
        className="block px-2 py-1 rounded-md transition-all duration-200 hover:bg-gray-100"
      >
        My Orders
      </Link>
      <Link
        to={""}
        className="block px-2 py-1 rounded-md transition-all duration-200 hover:bg-gray-100"
      >
        Save Addresses
      </Link>
      <button className="w-full text-left px-2 py-1 rounded-md text-red-600 font-medium transition-all duration-200 hover:bg-red-100">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
