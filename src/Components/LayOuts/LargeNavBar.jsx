
import { Link } from 'react-router-dom'
import { sidebarLinks } from '../Constants/sidebarLinks';

const LargeNavBar = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <Link
          to="/"
          className="mb-10 px-2 lg:block md:hidden  sm:hidden hidden"
        >
          <img src="/images/Logo.png" alt="logo" className="invert w-[150px]" />
        </Link>
        <Link to="/" className="mb-10 px-2 lg:hidden md:block  sm:block block">
          <img
            src="/images/instagramlogo.png"
            alt="logo"
            className="rounded-lg w-[150px]"
          />
        </Link>
        <div className="w-full h-auto flex items-start flex-col gap-y-2 text-white">
          {/* Loop other Nav */}
          {sidebarLinks.map(({ id, link, name, icon: Icon }) => (
            <Link
              to={link}
              key={id}
              className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
            >
              <Icon className="w-6 h-6 object-contain group-hover:scale-105 ease-out duration-300" />
              <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">
                {name}
              </p>
            </Link>
          ))}
          {/* Profile section */}
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
          >
            <img src="/images/Frank2.jpg" alt="Profile picture" className="w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300" />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">
              Profile
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LargeNavBar
