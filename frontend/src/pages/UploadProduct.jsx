import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../utils/UploadImage";
import Loading from "../components/Loading";
import ViewImage from "../components/ViewImage";

const UploadProduct = () => {
  const [data, setdata] = useState({
    name: "",
    image: [],
    category: [],
    subCategory: [],
    unit: [],
    stock: "",
    price: "",
    discount: "",
    description: "",
    more_details: {},
    publish: true,
  });

  const [imageLoading, setImageLoading] = useState(false);
  const [ViewImageUrl, setViewImageUrl] = useState("")

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
              <div className="my-2">
                {data.image.map((image, index) => {
                  return (
                    <div
                      key={image + index}
                      className="h-20 w-20 min-w-20 bg-blue-50 border"
                    >
                      <img
                        src={image}
                        alt={image}
                        className="w-full h-full object-scale-down"
                        onClick={() => setViewImageUrl(image)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </form>
      </div>

      {
        ViewImageUrl && (
          <ViewImage url={ViewImageUrl} close={() => setViewImageUrl("")} />
        )
      }
    </section>
  );
};

export default UploadProduct;
