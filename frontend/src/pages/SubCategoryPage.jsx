import React, { useEffect, useState } from "react";
import UploadSubCategoryModel from "../components/UploadSubCategoryModel";
import AxiosToastError from "../utils/AxiosToastError";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import DisplayTable from "../components/DisplayTable";
import { createColumnHelper } from '@tanstack/react-table'
import ViewImage from "../components/ViewImage";

const SubCategoryPage = () => {
  const [openAddSubCategory, setOpenAddSubCategory] = useState(false);
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const columnHelper = createColumnHelper();
  const [ImageURL,setImageURL] = useState("");

  const fetchSubCategory = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.getSubcategory
      })

      const {data : responseData} = response;
      if(responseData.success) {
        setdata(responseData.data);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
      }
  }

  useEffect(() => {
    fetchSubCategory();
  }, []);

  const column = [
    columnHelper.accessor('name', {
      header: 'Name',
    }),
    columnHelper.accessor('image',{
      header : "Image",
      cell : ({row})=>{
        return <div className='flex justify-center items-center'>
            <img 
                src={row.original.image}
                alt={row.original.name}
                className='w-10 h-10 cursor-pointer'
                onClick={()=>{
                  setImageURL(row.original)
                }}      
            />
        </div>
      }
    }),
    columnHelper.accessor("category",{
      header : "Category",
      cell : ({row})=>{
       return(
         <>
           {
             row.original.category.map((c,index)=>{
               return(
                 <p key={c._id+"table"} className='shadow-md px-1 inline-block'>{c.name}</p>
               )
             })
           }
         </>
       )
      }
   }),
  ];  

  // console.log(data)
  return (
    <section>
      <div className="p-2 bg-white shadow-md flex items-center justify-between">
        <h2 className="font-semibold">Sub Category</h2>
        <button
          onClick={() => setOpenAddSubCategory(true)}
          className="text-xs font-semibold border border-[#68AB95] px-4 py-2 rounded-full mt-5 
  text-[#68AB95] transition-all duration-300 ease-in-out 
  hover:bg-[#68AB95] hover:text-white hover:shadow-lg 
  active:scale-95 active:bg-[#D69CAA]"
        >
          Add Sub Category
        </button>
      </div>

      <div>
        <DisplayTable
        data={data}
        column={column} />
      </div>


      {
        openAddSubCategory && <UploadSubCategoryModel close={() => setOpenAddSubCategory(false)} />
      }

      {
        ImageURL && <ViewImage data={ImageURL} close={() => setImageURL("")} />
      }
    </section>
  );
};

export default SubCategoryPage;
