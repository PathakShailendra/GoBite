import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from '../utils/AxiosToastError'

const ProductListPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const params = useParams();

  const subCategory = params?.subCategory?.split("-")
  const subCategoryName = subCategory?.slice(0, subCategory?.length - 1)?.join(" ")

  const categoryId = params.category.split("-").slice(-1)[0]
  const subCategoryId = params.subCategory.split("-").slice(-1)[0]

  const fetchProductData = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.getProductByCategoryAndSubCategory,
        data: {
          categoryId: categoryId,
          subCategoryId: subCategoryId,
          page : page,
          limit : 10,
        },
      });

      const {data : responseData } = response;
      if (responseData.success) {
        console.log(responseData)
        if (responseData.page == 1) {
          setData(responseData.data)
        } else {
          setData([...data, ...responseData.data])
        }
        setTotalPage(responseData.totalCount)
      }
    } catch (error) {
      AxiosToastError(error)
    } finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [params])

  return (
    <section className="mt-7 lg:mt-0 sticky top-24 lg:top-20">
      <div className="container sticky mx-auto grid grid-cols-[90px_1fr] md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr]">
        {/* Sub category */}
        <div className="min-h-[80vh] bg-red-300">Sub Category</div>

        {/* Product */}
        <div className="bg-green-300">
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default ProductListPage;


// video 2:37 min cmpleted and one error is coming wo check kar lena kaha aa rha he 