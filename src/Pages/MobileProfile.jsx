import React from 'react'
import { IoIosLink, IoIosSettings } from 'react-icons/io';
import { Link } from 'react-router-dom';

const MobileProfile = () => {
  return (
    <>
      <div className="w-full h-auto md:hidden block text-white">
        <div className="w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-3.5 justify-center mb-10">
          <img
            src="/images/ifueko.jpg"
            alt="profile-img"
            className="rounded-full md:w-44 w-20  h-20 object-cover"
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
      </div>
    </>
  );
}

export default MobileProfile
