import React from "react";
import LargeNavBar from "../Components/LayOuts/LargeNavBar";
import MobileNav from "../Components/LayOuts/MobileNav";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
      {/* Sidebar */}
      <div className="lg:w-[16%] md:w-[17%] h-[100vh] pt-10 px-3 border-r border-gray-500 sticky top-0 left-0 lg:block md:block hidden">
        <LargeNavBar />
      </div>

      {/* Feed and profile routing section */}
      <div className="w-full min-h-screen px-3 pt-3 pb-20">
        <Outlet /> {/* 👈 FeedPage or others will render here */}
      </div>

      {/* Mobile Navbar */}
      <div className="w-full h-auto py-1 px-3 border-t fixed bottom-0 left-0 lg:hidden sm:block bg-black z-50">
        <MobileNav />
      </div>
    </div>
  );
};

export default HomePage;
