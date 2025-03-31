import React, { useState } from "react";
// import EditProductAdmin from './EditProductAdmin'
// import CofirmBox from './CofirmBox'
import { IoClose } from "react-icons/io5";
import SummaryApi from "../common/SummaryApi";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";
import toast from "react-hot-toast";

const ProductCardAdmin = ({ data, fetchProductData }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleDeleteCancel = () => {
    setOpenDelete(false);
  };

  //   const handleDelete = async () => {
  //     try {
  //       const response = await Axios({
  //         ...SummaryApi.deleteProduct,
  //         data: {
  //           _id: data._id,
  //         },
  //       });

  //       const { data: responseData } = response;

  //       if (responseData.success) {
  //         toast.success(responseData.message);
  //         if (fetchProductData) {
  //           fetchProductData();
  //         }
  //         setOpenDelete(false);
  //       }
  //     } catch (error) {
  //       AxiosToastError(error);
  //     }
  //   };

  return (
    <div className="w-40 h-64 rounded-lg shadow-md overflow-hidden bg-white transition-transform duration-300 hover:scale-102 hover:shadow-lg flex flex-col justify-between">
      {/* Image Section */}
      <div className="w-full h-48 flex items-center justify-center overflow-hidden">
        <img
          src={data?.image[0]}
          alt={data?.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Unit */}
      <div className="px-2 grid gap-2">
        <p className="text-sm text-center font-semibold text-gray-700 line-clamp-2">
          {data?.name}
        </p>
        <p className="text-sm text-center text-gray-600 font-medium mt-1">{data?.unit}</p>{" "}
        {/* Increased Font Size & Left Align */}
      </div>

      {/* Styled Button Section */}
      <div className="flex justify-center gap-3 pb-3 mt-3">
        <button
          onClick={() => setEditOpen(true)}
          className="px-3 py-1 text-sm font-medium text-white bg-[#68AB95] rounded-md shadow-md transition-all duration-300 hover:bg-[#4F8273] hover:shadow-lg"
        >
          Edit
        </button>
        <button
          onClick={() => setOpenDelete(true)}
          className="px-3 py-1 text-sm font-medium text-white bg-[#D69CAA] rounded-md shadow-md transition-all duration-300 hover:bg-[#AD6F83] hover:shadow-lg"
        >
          Delete
        </button>
      </div>

      {/* 
  {editOpen && (
    <EditProductAdmin
      fetchProductData={fetchProductData}
      data={data}
      close={() => setEditOpen(false)}
    />
  )} 
  */}

      {openDelete && (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-neutral-600 z-50 bg-opacity-70 p-4 flex justify-center items-center">
          <div className="bg-white p-4 w-full max-w-md rounded-md">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold">Permanent Delete</h3>
              <button onClick={() => setOpenDelete(false)}>
                <IoClose size={25} />
              </button>
            </div>
            <p className="my-2">Are you sure you want to delete permanently?</p>
            <div className="flex justify-end gap-5 py-4">
              <button
                onClick={handleDeleteCancel}
                className="border px-3 py-1 rounded bg-[#D69CAA] border-[#AD6F83] text-[#AD6F83] hover:bg-[#AD6F83] hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="border px-3 py-1 rounded bg-[#68AB95] border-[#4F8273] text-white hover:bg-[#4F8273]"
              >
                Delete
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductCardAdmin;


// 3rd video khtm ho gyi he and ui update karna baki he and usme product wala ui update ho gaya he thoda search bar wala and neeche wala jo bar he uska update karna baki he

//cleaning essentias tak product upload ho cuhke hai next coldrink and juices upload karna hai