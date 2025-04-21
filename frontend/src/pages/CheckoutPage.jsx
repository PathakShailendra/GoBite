import React, { useState } from "react";
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees'
import { useGlobalContext } from '../provider/GlobalProvider'
import AddAddress from "../components/AddAddress";

const CheckoutPage = () => {
  const { notDiscountTotalPrice, totalPrice, totalQty } = useGlobalContext()
  const [openAddress, setOpenAddress] = useState(false)

  return (
    <section className="bg-blue-50 mt-7 lg:mt-0 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row w-full gap-6 justify-between">
        {/* Left: Address Section */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-lg font-semibold mb-2">Choose your address</h3>
          <div
            onClick={() => setOpenAddress(true)}
            className="h-16 bg-blue-50 border-2 border-dashed flex justify-center items-center cursor-pointer hover:bg-blue-100 transition"
          >
            Add Address
          </div>
        </div>

        {/* Right: Summary Section */}
        <div className="w-full lg:w-1/3 bg-white py-5 px-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-4">Summary</h3>

          <div className="bg-white space-y-4">
            <h3 className="font-semibold">Bill details</h3>

            <div className="flex justify-between text-sm">
              <p>Items total</p>
              <p className="flex items-center gap-2">
                <span className="line-through text-neutral-400 text-sm">
                  {DisplayPriceInRupees(notDiscountTotalPrice)}
                </span>
                <span className="font-medium">{DisplayPriceInRupees(totalPrice)}</span>
              </p>
            </div>

            <div className="flex justify-between text-sm">
              <p>Quantity total</p>
              <p>{totalQty} item{totalQty > 1 ? "s" : ""}</p>
            </div>

            <div className="flex justify-between text-sm">
              <p>Delivery Charge</p>
              <p>Free</p>
            </div>

            <div className="font-semibold flex justify-between border-t pt-2">
              <p>Grand total</p>
              <p>{DisplayPriceInRupees(totalPrice)}</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 mt-5">
            <button className="py-2 px-4 bg-green-600 hover:bg-green-700 rounded text-white font-semibold w-full text-sm">
              Online Payment
            </button>

            <button className="py-2 px-4 border-2 border-green-600 text-green-600 font-semibold hover:bg-green-600 hover:text-white transition w-full text-sm">
              Cash on Delivery
            </button>
          </div>
        </div>
      </div>

      {openAddress && <AddAddress close={() => setOpenAddress(false)} />}
    </section>
  );
};

export default CheckoutPage;
