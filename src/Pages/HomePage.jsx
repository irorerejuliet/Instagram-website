import React from 'react'
import LargeNavBar from '../Components/LayOuts/LargeNavBar'

const HomePage = () => {
  return (
   <>
   <div className='w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative'>
{/* Sidebar section */}
<div className='lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden'>
<LargeNavBar/>
</div>
{/* Botton Navbar dor small screem */}
{/* Feed and profile routing section */}
   </div>
   </>
  )
}

export default HomePage
