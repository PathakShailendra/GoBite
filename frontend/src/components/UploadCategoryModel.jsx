import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const UploadCategoryModel = ({ close }) => {
  const [data, setdata] = useState({
    name: "",
    image: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUploadCategory = (e) => {
    const file = e.target.files[0];
    if(!file) {
      return
    }
  }

  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 p-4 bg-neutral-800/60 flex items-center justify-center">
      <div className="bg-white max-w-4xl w-full p-4 rounded">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">Category</h1>
          <button
            onClick={close}
            className="w-fit block ml-auto p-1.5 rounded-full transition-all duration-300 ease-in-out hover:bg-gray-200/50 hover:scale-110 hover:shadow-md active:scale-95 cursor-pointer"
          >
            <IoClose
              size={25}
              className="text-gray-700 transition-colors duration-300 hover:text-red-500"
            />
          </button>
        </div>

        <form className="my-3 grid gap-3" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label htmlFor="catrgoryName">Name</label>
            <input
              type="text"
              id="catrgoryName"
              placeholder="Enter category name"
              value={data.name}
              name="name"
              onChange={handleOnChange}
              className="bg-blue-50 p-2 border border-blue-100 focus-within:bg-[#68AB95]] outline-none rounded"
            />
          </div>
          <div className="grid gap-1">
            <p>Image</p>
            <div className="flex gap-3 flex-col lg:flow-row">
              <div className="border bg-blue-50 h-36 w-full lg:w-36 flex items-center justify-center rounded ">
                <p className="text-sm text-neutral-500 ">No Image</p>
              </div>
              <label htmlFor="uploadCategoryImage">
                <div
                  disabled={!data.name}
                  className={`
    relative w-fit px-4 py-1.5 text-sm font-medium rounded-full overflow-hidden shadow-md transition-all duration-300 ease-in-out
    ${
      !data.name
        ? "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 shadow-none"
        : "text-white bg-gradient-to-r from-[#D69CAA] to-[#68AB95] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white/20 before:transition-all before:duration-500 before:ease-out hover:before:w-full hover:shadow-lg active:scale-95 cursor-pointer"
    }
  `}
                >
                  Upload Image
                </div>
                <input onChange={handleUploadCategory} type="file" id="uploadCategoryImage" className="hidden" />
              </label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UploadCategoryModel;
