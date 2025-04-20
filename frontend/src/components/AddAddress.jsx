import React from "react";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form"
// import { useForm, SubmitHandler } from "react-hook-form";

const AddAddress = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async(data)=>{
    console.log("data",data)
  }

  return (
    <section className="bg-black/70 fixed top-0 left-0 right-0 bottom-0 z-50 h-screen overflow-auto">
      <div className="bg-white p-4 w-full max-w-lg mt-8 mx-auto rounded">
        <div className="flex justify-between items-center gap-4">
          <h2 className="font-semibold">Add Address</h2>
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

        <form className="mt-4 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-1">
            <label htmlFor="">Address Line :</label>
            <input
              type="text"
              id="addressline"
              className="border bg-blue-50 p-2 rounded"
              {...register("addressline",{required : true})}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddAddress;

// video 38 min completed add address wala part bana rahe he