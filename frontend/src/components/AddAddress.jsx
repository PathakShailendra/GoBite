import React from "react";
import { IoClose } from "react-icons/io5";

const AddAddress = () => {
  return (
    <section className="bg-black/70 fixed top-0 left-0 right-0 bottom-0 z-50 h-screen overflow-auto">
      <div className="bg-white p-4 w-full max-w-lg mt-8 mx-auto rounded">

        <div className="flex justify-between items-center gap-4">
          <h2 className="font-semibold">Add Address</h2>
          <button onClick={close} className="hover:text-red-500">
            <IoClose size={25} />
          </button>
        </div>


      </div>
    </section>
  );
};

export default AddAddress;
