import React from "react";
import { DisplayPriceInRupees } from "../utils/DisplayPriceInRupees";
import { Link } from "react-router-dom";
import { valideURLConvert } from "../utils/validURLConvert";

const CardProduct = ({ data }) => {
  const url = `/product/${valideURLConvert(data.name)}-${data._id}`;
  return (
    <Link
      to={url}
      className="border rounded-lg shadow-md my-1 bg-white transition-all duration-300 transform hover:scale-102 hover:shadow-lg flex flex-col p-2 lg:p-3 gap-2 w-40 lg:min-w-44"
    >
      {/* Image Container */}
      <div className="min-h-24 max-h-24 lg:max-h-32 rounded overflow-hidden">
        <img
          src={data.image[0]}
          className="w-full h-full object-scale-down"
          alt="Product"
        />
      </div>

      {/* Product Name */}
      <div className="px-2 lg:px-0 font-medium text-sm lg:text-base text-ellipsis line-clamp-2 text-gray-800">
        {data.name}
      </div>

      {/* Product Unit */}
      <div className="w-fit lg:px-0 px-2 text-xs lg:text-sm text-gray-600">
        {data.unit}
      </div>

      {/* Price & Add Button Section */}
      <div className="px-2 lg:px-0 flex items-center justify-between gap-1 lg:gap-2 text-xs lg:text-sm">
        {/* Price */}
        <div className="font-semibold text-green-700 text-sm lg:text-base">
          {DisplayPriceInRupees(data.price)}
        </div>
        {/* Add Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-2 lg:px-3 py-1 rounded-md shadow-md transition-all duration-300 transform hover:scale-102">
          Add
        </button>
      </div>

      {/* Time Badge */}
      <div className="absolute top-2 left-2 rounded-full p-1 w-fit text-xs px-2 text-green-600 bg-green-100">
        10 min
      </div>
    </Link>
  );
};

export default CardProduct;
