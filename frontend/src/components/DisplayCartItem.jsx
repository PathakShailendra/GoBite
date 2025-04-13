import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../provider/GlobalProvider";
import { DisplayPriceInRupees } from "../utils/DisplayPriceInRupees";
import { FaCaretRight } from "react-icons/fa";

const DisplayCartItem = ({ close }) => {
  const { notDiscountTotalPrice, totalPrice, totalQty } = useGlobalContext();
  return (
    <section className="bg-neutral-900/70 fixed top-0 left-0 right-0 bottom-0 z-50">
      <div className="bg-white w-full max-w-sm min-h-screen max-h-screen ml-auto">
        <div className="flex items-center justify-between p-4 shadow-md">
          <h2 className="font-semibold">Cart</h2>
          <Link to={"/"} className="lg:hidden">
            <IoClose
              size={25}
              className="text-gray-700 transition-colors duration-300 hover:text-red-500"
            />
          </Link>
          <button
            onClick={close}
            className="w-fit ml-auto p-1.5 hidden lg:block rounded-full transition-all duration-300 ease-in-out hover:bg-gray-200/50 hover:scale-110 hover:shadow-md active:scale-95 cursor-pointer"
          >
            <IoClose
              size={25}
              className="text-gray-700 transition-colors duration-300 hover:text-red-500"
            />
          </button>
        </div>

        <div className="min-h-[75vh] lg:min-h-[80vh] h-full max-h-[calc(100vh-150px)] bg-blue-50 ">
          {/* Display items */}
        </div>

        <div className="p-4">
          <div className="bg-green-700 text-white rounded-lg px-6 py-3 flex items-center justify-between shadow-md">
            <div className="text-lg font-semibold">
              {DisplayPriceInRupees(totalPrice)}
            </div>
            <button className="bg-white flex items-center gap-2 text-green-700 font-medium px-5 py-2 rounded-md text-sm sm:text-base active:scale-[0.98] transition-all duration-200 cursor-pointer">
              Proceed
              <span>
                <FaCaretRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayCartItem;
