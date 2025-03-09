import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { logout } from "../store/userSlice";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";


const UserMenu = ({close}) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.logout,
      });
      if (response.data.success) {
        if(close) {
          close()
        }
        dispatch(logout());
        localStorage.clear()
        toast.success(response.data.message)
      }
    } catch (error) {
      AxiosToastError(error)
    }
  };

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
      <button
        onClick={handleLogout}
        className="w-full text-left px-2 py-1 rounded-md text-red-600 font-medium transition-all duration-200 hover:bg-red-100"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
