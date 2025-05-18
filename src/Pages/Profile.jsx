import Main from "../Components/main"
import MobileProfile from "./MobileProfile"



const Profile = () => {
  return (
   
        <div className='w-full min-h-screen lg:py-10 md:py-6 sm:py-4 lg:px-14 md:12 smpx-7 px-3'>
          {/* profile for big screem */}
          <Main/>
          {/* profile for larfe screen */}
          <MobileProfile/>
        </div>
  )
}

export default Profile
