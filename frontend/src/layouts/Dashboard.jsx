import React from "react";
import UserMenu from "../components/UserMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto w-full p-3 grid lg:grid-cols-[250px_1fr] gap-4">
        {/* Left for menu (Fixed Width - 250px) */}
        <div className="w-[250px] py-4 overflow-y-auto hidden lg:block border-r">
          <UserMenu />
        </div>

        {/* Right for content (Takes Remaining Space) */}
        <div className="flex-1 bg-white min-h-[80vh]">
            <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
