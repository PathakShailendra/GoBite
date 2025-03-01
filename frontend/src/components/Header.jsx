import React from "react";
import logo from "../assets/GO_BITE_LOGO.svg";
import Search from "./Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from "../hooks/useMobile";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const [isMobile] = useMobile();

  const location = useLocation();

  const isSearchPage = location.pathname === "/search";
  const navigate = useNavigate();
  const redirectToLoginPage = () => {
    navigate("/login");
  }

  return (
    <header className="h-24 lg:h-20 sticky lg:shadow-md top-0 flex justify-center flex-col gap-1 bg-white">
      {!(isSearchPage && isMobile) && (
        <div className="container mx-auto flex items-center px-2 justify-between">
          {/* logo */}
          <div className="h-full">
            <Link to={"/"} className="h-full flex items-center justify-center">
              <img
                src={logo}
                width={140}
                height={50}
                alt="logo"
                className="hidden lg:block"
              />
              <img
                src={logo}
                width={110}
                height={60}
                alt="logo"
                className="lg:hidden"
              />
            </Link>
          </div>

          {/* search */}

          <div className="hidden lg:block">
            <Search />
          </div>

          {/* login and my cart */}
          <div>
            {/**user icons display in only mobile version**/}
            <button className="text-neutral-600 lg:hidden">
              <FaRegCircleUser size={25} />
            </button>


            {/**Desktop**/}
            <div className="hidden lg:flex items-center gap-10">
              <button onClick={redirectToLoginPage} className="text-lg px-2 font-semibold">Login</button>
              <button className="flex items-center gap-2 bg-green-800 hover:bg-green-700 px-3 py-3 text-white rounded-lg">
                {/* {add to cart icons} */}
                <div className="animate-bounce">
                <FaCartShopping  size={28} />
                </div>
                <div className="font-semibold">
                  <p> My cart </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-2 lg:hidden">
        <Search />
      </div>
    </header>
  );
};

export default Header;
