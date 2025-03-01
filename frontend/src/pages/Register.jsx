import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const validateValue = Object.values(data).every((value) => value);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [showPasword, setshowPasword] = useState(false);
  const [showConfirmPasssword, setshowConfirmPasssword] = useState(false);

  return (
    <section className=" w-full container mx-auto px-2">
      <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
        <p className="text-4xl font-extrabold text-[#67AB95] text-center mt-6">
          Welcome to <span className="text-[#D69CAA]">GoBite</span> 🍽️
        </p>

        <form onSubmit={handleSubmit} action="" className="grid gap-4 mt-6">
          <div className="grid gap-1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              autoFocus
              value={data.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-blue-50 p-2 border rounded-md outline-none focus:border-[#ffbf00]"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-blue-50 p-2 border rounded-md outline-none focus:border-[#ffbf00]"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="password">Password:</label>
            <div className="bg-blue-50 p-2 border rounded-md flex items-center focus-within:border-[#ffbf00]">
              <input
                type={showPasword ? "text" : "password"}
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full outline-none"
              />
              <div
                onClick={() => {
                  setshowPasword((prev) => !prev);
                }}
                className="cursor-pointer"
              >
                {showPasword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>

          <div className="grid gap-1">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <div className="bg-blue-50 p-2 border rounded-md flex items-center focus-within:border-[#ffbf00]">
              <input
                type={showConfirmPasssword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Enter your confirm password"
                className="w-full outline-none"
              />
              <div
                onClick={() => {
                  setshowConfirmPasssword((prev) => !prev);
                }}
                className="cursor-pointer"
              >
                {showConfirmPasssword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>

          <button
            className={`${
              validateValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"
            }  my-3 font-semibold text-white p-2 rounded-md tracking-wide`}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
