import React from 'react'
import LargeNavBar from '../Components/LayOuts/LargeNavBar'
import MobileNav from '../Components/LayOuts/MobileNav'

const HomePage = () => {
  return (
   <>
   <div className='w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative'>
{/* Sidebar section */}
<div className='lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden'>
<LargeNavBar/>
</div>
{/* Botton Navbar for small screem */}
<div className='w-full h-auto py-1 px-3 border-t border-r-[#1d1d1d] fixed bottom-0 left-0 lg:hidden sm:block bg-black z-50'>
<MobileNav/>
</div>
{/* Feed and profile routing section */}
   </div>
   </>
  )
}

export default HomePage
