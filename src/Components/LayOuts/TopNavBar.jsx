import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { BsMessenger } from "react-icons/bs";

const TopNavBar = () => {
  return (
    <div className="w-full h-auto mb-5 lg:hidden md:hidden sm:block block">
      <div className="w-full h-auto flex items-center justify-between  ">
        <Link to="/">
          <img
            src="/images/Logo.png"
            alt="logo"
            className="w-[150px] invert object-contain h-auto"
          />
        </Link>
        <div className="flex items-center gap-x-4 pe-2">
          <Link to="/">
            <IoSearchOutline size={25} />
          </Link>
          <Link to="/" className="relative">
            <BsMessenger size={20} />
            <div className="absolute -right-2 -top-2 bg-red-600 sm:text-white rounded-full w-5 h-5 flex items-center justify-center ">
              9
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
