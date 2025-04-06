import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../provider/GlobalProvider";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa6";

const AddToCartButton = ({ data }) => {
  const { fetchCartItem, updateCartItem, deleteCartItem } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const cartItem = useSelector((state) => state.cartItem.cart);
  const [isAvailableCart, setIsAvailableCart] = useState(false);
  const [qty, setQty] = useState(0);
  const [cartItemDetails, setCartItemsDetails] = useState();

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent the click event from propagating to the Link component
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.addToCart,
        data: {
          productId: data?._id,
        },
      });
      const { data: responseData } = response;
      if (responseData.success) {
        toast.success(responseData.message);
        if (fetchCartItem) {
          fetchCartItem();
        }
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkingitem = cartItem.some(
      (item) => item.productId._id === data._id
    );
    setIsAvailableCart(checkingitem);

    const product = cartItem.find((item) => item.productId._id === data._id);
    setQty(product?.quantity);
    setCartItemsDetails(product);
  }, [data, cartItem]);

  const increaseQty = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const response = await updateCartItem(cartItemDetails?._id, qty + 1);

    if (response.success) {
      toast.success("Item added");
    }
  };

  const decreaseQty = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (qty === 1) {
      deleteCartItem(cartItemDetails?._id);
    } else {
      const response = await updateCartItem(cartItemDetails?._id, qty - 1);

      if (response.success) {
        toast.success("Item removed");
      }
    }
  };

  return (
    <div className="w-full h-[40px] mt-2">
      {isAvailableCart ? (
        <div className="flex items-center justify-between gap-0 bg-green-100 p-1 rounded-md shadow-sm h-full">
          <button
            onClick={decreaseQty}
            className="bg-green-600 hover:bg-green-700 text-white w-6 h-6 flex items-center justify-center rounded-full transition duration-200"
          >
            <FaMinus size={10} />
          </button>
          <span className="text-sm font-semibold text-gray-800 min-w-[24px] text-center">
            {qty}
          </span>
          <button
            onClick={increaseQty}
            className="bg-green-600 hover:bg-green-700 text-white w-6 h-6 flex items-center justify-center rounded-full transition duration-200"
          >
            <FaPlus size={10} />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="bg-green-600 relative hover:bg-green-700 text-white px-4 m-4 py-1 rounded-md shadow-md transition-all duration-300 transform hover:scale-[1.03] text-sm flex justify-center items-center"
        >
          {loading ? <Loading /> : "Add"}
        </button>
      )}
    </div>
  );
  
};

export default AddToCartButton;

// Circle wali loading daalna he add to cart wali button me jab product upload karte he tab
