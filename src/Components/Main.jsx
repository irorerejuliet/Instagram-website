import React from 'react'
import { CiLink } from 'react-icons/ci';
import { FaLink } from 'react-icons/fa';
import { IoIosLink, IoIosSettings, } from 'react-icons/io';
import { Link } from 'react-router-dom'
import { highlightData } from './Constants/HighlightData';

const Main= () => {
  return (
    <>
      <div className="lg:w-[88%]  md:w-[88%] sm:w-full w-full  h-auto lg:block md:block sm:hidden hidden">
        {/* Ypur info section */}
        <div className="w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-3.5 justify-center mb-10">
          <img
            src="/images/ifueko.jpg"
            alt="profile-img"
            className="rounded-full md:w-44 w-32 lg:h-44 md:h-44 sm:h-36 h-36 object-cover"
          />
          <div className="flex items-start flex-col">
            <div className="flex items-center gap-x-5 mb-4">
              <Link to="/profile" className="text-lg text-gray-200 font-normal">
                mountain.men
              </Link>
              <div className="flex items-center gap-x-2">
                <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                  Edit profile
                </button>
                <button className="bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150">
                  Veiw archive
                </button>
              </div>
              <IoIosSettings size={20} className="text-white" />
            </div>
            {/* Post, followes, following */}
            <div className="flex items-center gap-x-6 mb-4">
              <h6 className="text-base text-gray-100 font-normal">12 Posts</h6>
              <Link to="/" className="text-base text-gray-100 font-normal">
                3200 Followers
              </Link>
              <Link to="/" className="text-base text-gray-100 font-normal">
                200 Following
              </Link>
            </div>
            {/* fullname */}
            <p className="text-base text-gray-100 font-normal">
              FrontEnd Developer
            </p>
            {/* Bio */}
            <p className="text-base text-gray-100 font-normal">
              IRORERE JULIET <br />
              Professional Account <br />
              Professional Account <br />
              Professional Account <br />
            </p>
            {/* Links */}
            <p className="text-base text-gray-100 font-normal flex items-center gap-x-2">
              <IoIosLink />
              <Link
                to="/"
                className="text-blue-500 hover:underline font-medium"
              >
                irorerejuliet@gmail.com
              </Link>
            </p>
          </div>
        </div>
        {/* Highlight section */}
        <div className="w-full h-auto flex items-center gap-x-9 mb-10">
          <div className="max-w-[61vw] w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
            {highlightData.map(({ id, image, username }) => (
              <Link
                to="/"
                key={id}
                className="flex items-center justify-between flex-col flex-shrink-0"
              >
                <div className="w-28 h-28 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#1d1d1d]">
                  <img
                    src={image}
                    alt={username}
                    className="rounded-full h-full w-full object-cover p-[2.5px] bg-black"
                  />
                  <p className="text-white text-sm mt-1">
                    {username}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Post, Reels, Tagged section */}
      </div>
    </>
  );
}

export default Main
