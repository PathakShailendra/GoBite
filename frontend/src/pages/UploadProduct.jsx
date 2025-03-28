import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../utils/UploadImage";
import Loading from "../components/Loading";
import ViewImage from "../components/ViewImage";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const UploadProduct = () => {
  const [data, setdata] = useState({
    name: "",
    image: [],
    category: [],
    subCategory: [],
    unit: "",
    stock: "",
    price: "",
    discount: "",
    description: "",
    more_details: {},
    publish: true,
  });

  const [imageLoading, setImageLoading] = useState(false);
  const [ViewImageUrl, setViewImageUrl] = useState("");
  const allCategory = useSelector((state) => state.product.allCategory);
  const [selectCategory, setselectCategory] = useState("");
  const [selectSubCategory,setSelectSubCategory] = useState("")
  const allSubCategory = useSelector(state => state.product.allSubCategory)

  console.log(allSubCategory)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    setImageLoading(true);
    const response = await uploadImage(file);
    const { data: imageResponse } = response;

    const imageUrl = imageResponse.data.url;
    setdata((prev) => {
      return {
        ...prev,
        image: [...prev.image, imageUrl],
      };
    });
    setImageLoading(false);
  };

  const handleDeleteImage = async (index) => {
    data.image.splice(index, 1);
    setdata((prev) => {
      return {
        ...prev,
      };
    });
  };

  return (
    <section>
      <div className="p-2 bg-white shadow-md flex items-center justify-between">
        <h2 className="font-semibold">Upload Product</h2>
      </div>
      <div className="grid p-4">
        <form className="grid gap-2">
          <div className="grid gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Enter product name"
              value={data.name}
              onChange={handleChange}
              required
              className="bg-blue-50 p-2 outline-none border focus-within:border-[#D69CAA] rounded"
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="description" className="font-medium">
              Description
            </label>
            <textarea
              id="description"
              type="text"
              placeholder="Enter product description"
              name="description"
              value={data.description}
              onChange={handleChange}
              required
              multiple
              rows={3}
              className="bg-blue-50 p-2 outline-none border focus-within:border-primary-200 rounded resize-none"
            />
          </div>
          <div>
            <p>Image</p>
            <div>
              <label
                htmlFor="productImage"
                className="bg-blue-50 h-24 border rounded flex items-center justify-center cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center space-y-1">
                  {imageLoading ? (
                    <Loading />
                  ) : (
                    <>
                      <FaCloudUploadAlt size={35} />
                      <p>upload image</p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  id="productImage"
                  className="hidden"
                  accept="image/*"
                  onChange={handleUploadImage}
                />
              </label>

              {/* display uploaded images */}
              <div className="flex flex-wrap gap-4">
                {data.image.map((image, index) => {
                  return (
                    <div
                      key={image + index}
                      className="h-20 mt-1 w-20 min-w-20 bg-blue-50 border relative group"
                    >
                      <img
                        src={image}
                        alt={image}
                        className="w-full h-full object-scale-down cursor-pointer"
                        onClick={() => setViewImageUrl(image)}
                      />
                      <div
                        onClick={() => handleDeleteImage(index)}
                        className="absolute bottom-[2px] right-[2px] p-1 bg-red-600 hover:bg-red-800 rounded-full text-white hidden group-hover:block cursor-pointer"
                      >
                        <MdDelete size={20} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid gap-1">
            <label>Category</label>
            <div>
              <select
                className="bg-blue-50 border w-full p-2 rounded"
                name=""
                id=""
                value={selectCategory}
                onChange={(e) => {
                  const value = e.target.value;
                  const category = allCategory.find((c) => c._id === value);
                  setdata((prev) => {
                    return {
                      ...prev,
                      category: [...prev.category, category],
                    };
                  });
                  setselectCategory("");
                }}
              >
                <option value={""}>Select Category</option>
                {allCategory.map((c, index) => {
                  return (
                    <option key={c._id} value={c?._id}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
              <div className="mt-1 flex flex-wrap gap-2">
                {data.category.map((c, index) => (
                  <motion.div
                    key={c._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-100 px-3 py-1.5 flex items-center rounded-lg shadow-md hover:shadow-lg transition-all inline-flex"
                  >
                    <p className="text-gray-800 font-medium">{c.name}</p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        data.category.splice(index, 1);
                        setdata((prev) => ({
                          ...prev,
                        }));
                      }}
                      className="bg-red-600 ml-2 p-1.5 rounded-full text-white shadow-md hover:bg-red-700 transition-all"
                    >
                      <MdDelete size={18} />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-1">
            <label>Sub Category</label>
            <div>
              <select
                className="bg-blue-50 border w-full p-2 rounded"
                name=""
                id=""
                value={selectSubCategory}
                onChange={(e) => {
                  const value = e.target.value;
                  const subCategory = allSubCategory.find((c) => c._id === value);
                  setdata((prev) => {
                    return {
                      ...prev,
                      subCategory: [...prev.subCategory, subCategory],
                    };
                  });
                  setSelectSubCategory("");
                }}
              >
                <option value={""}>Select Category</option>
                {allSubCategory.map((c, index) => {
                  return (
                    <option key={c._id} value={c?._id}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
              <div className="mt-1 flex flex-wrap gap-2">
                {data.subCategory.map((c, index) => (
                  <motion.div
                    key={c._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-100 px-3 py-1.5 flex items-center rounded-lg shadow-md hover:shadow-lg transition-all inline-flex"
                  >
                    <p className="text-gray-800 font-medium">{c.name}</p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        data.subCategory.splice(index, 1);
                        setdata((prev) => ({
                          ...prev,
                        }));
                      }}
                      className="bg-red-600 ml-2 p-1.5 rounded-full text-white shadow-md hover:bg-red-700 transition-all"
                    >
                      <MdDelete size={18} />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>

      {ViewImageUrl && (
        <ViewImage url={ViewImageUrl} close={() => setViewImageUrl("")} />
      )}
    </section>
  );
};

export default UploadProduct;
