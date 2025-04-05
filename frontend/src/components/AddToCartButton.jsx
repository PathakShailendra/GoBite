import React, { useState } from "react";
import { useGlobalContext } from "../provider/GlobalProvider";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToastError";
import Loading from "../components/Loading";

const AddToCartButton = ({handleAddToCart, data}) => {

    const {fetchCartItem } = useGlobalContext()
    const [loading, setLoading ] = useState(false)

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
        })
        const { data: responseData } = response;
        if (responseData.success) {
          toast.success(responseData.message);
          if(fetchCartItem) {
            fetchCartItem()
          }
        }
  
        
      } catch (error) {
        AxiosToastError(error);
      } finally {
        setLoading(false)
      }
     
    }

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="bg-green-600 hover:bg-green-700 text-white px-2 lg:px-3 py-1 rounded-md shadow-md transition-all duration-300 transform hover:scale-102 text-xs lg:text-sm"
      >
        {
            loading ? <Loading /> : 'Add to Cart'
        }
      </button>
    </div>
  );
};

export default AddToCartButton;


