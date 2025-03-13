import React, { useState } from "react";
import UploadCategoryModel from "../components/UploadCategoryModel";

const CategoryPage = () => {

  const [openUploadCategory, setopenUploadCategory] = useState(false)

  return (
    <section>
      <div className="p-2 bg-white shadow-md flex items-center justify-between">
        <h2 className="font-semibold">Category</h2>
        <button onClick={() => setopenUploadCategory(true)}
          className="text-xs font-semibold border border-[#68AB95] px-4 py-2 rounded-full mt-5 
  text-[#68AB95] transition-all duration-300 ease-in-out 
  hover:bg-[#68AB95] hover:text-white hover:shadow-lg 
  active:scale-95 active:bg-[#D69CAA]"
        >
          Add Category
        </button>
      </div>
      {
        openUploadCategory && <UploadCategoryModel close={()=>setopenUploadCategory(false)} />
      }
    </section>
  );
};

export default CategoryPage;
