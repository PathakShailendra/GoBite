import React, { useEffect, useState } from "react";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import Axios from "../utils/Axios";
import Loading from "../components/Loading";
import ProductCardAdmin from "../components/ProductCardAdmin";
import { motion } from "framer-motion";
const ProductAdmin = () => {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPageCount,setTotalPageCount] = useState(1)

  const fetchProductData = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.getProduct,
        data: {
          page: page,
          limit: 10,
        },
      });

      const { data: responseData } = response;

      console.log("product page ", responseData);
      if (responseData.success) {
        setProductData(responseData.data);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [page]);


  const handleNext = ()=>{
    if(page !== totalPageCount){
      setPage(preve => preve + 1)
    }
  }
  const handlePrevious = ()=>{
    if(page > 1){
      setPage(preve => preve - 1)
    }
  }


  return (
    <section>
      <div className="p-2 lg:mt-2 mt-4 bg-white shadow-md flex items-center justify-between">
        <h2 className="font-semibold">Product</h2>
      </div>
      {loading && <Loading />}

      <div className="p-4 bg-blue-50">
        <div className="min-h-[55vh]">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {productData.map((p, index) => {
              return (
                <ProductCardAdmin
                  data={p}
                  fetchProductData={fetchProductData}
                />
              );
            })}
          </div>
        </div>

        <div className="flex justify-between my-4">
          <button
            onClick={handlePrevious}
            className="border border-[#D69CAA] px-4 py-1 hover:bg-[#D69CAA]"
          >
            Previous
          </button>
          <button className="w-full bg-white">
            {page}/{totalPageCount}
          </button>
          <button
            onClick={handleNext}
            className="border border-[#D69CAA] px-4 py-1 hover:bg-[#D69CAA]"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductAdmin;


// video 9:07:10 hour ki ho chuki he and abhi tak ham sare products ko show kar chuke he ab next hame wo search bar banana he jisme product ke naam se search kar sakenge 
// also hame iska pura ui bhi theek karna he