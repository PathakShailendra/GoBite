import React from "react";
import banner from "../assets/banner.jpg";
import bannerMobile from "../assets/banner-mobile.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const loadingCategory = useSelector((state) => state.product.loadingCategory);
  const categoryData = useSelector((state) => state.product.allCategory);
  const subCategoryData = useSelector((state) => state.product.allSubCategory);
  const navigate = useNavigate();

  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div
          className={`w-full h-full min-h-48 bg-blue-100 rounded 
          ${!banner && "animate-pulse my-2"}`}
        >
          <img
            src={banner}
            className="w-full h-full hidden lg:block"
            alt="banner"
          />
          <img
            src={bannerMobile}
            className="w-full mt-10 h-full lg:hidden"
            alt="banner"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 my-2 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-2">
        {loadingCategory
          ? new Array(12).fill(null).map((caches, index) => {
              return (
                <div className="bg-white rounded p-4 min-h-36 grid gap-2 shadow-md animate-pulse">
                  <div className="bg-blue-100 min-h-24 rounded"></div>
                  <div className="bg-blue-100 h-8 rounded"></div>
                </div>
              );
            })
          : categoryData.map((cat, index) => {
              return (
                <div>
                  <div>
                    <img src={cat.image} className="w-full h-full object-scale-down" alt="" />
                  </div>
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default Home;

