import React from 'react'
import { Link } from 'react-router-dom';

const Tags = () => {
  return (
    <>
      <div className="w-full h-auto  flex items-center gap-1 flex-wrap">
        <Link
          t="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/vacation.jpeg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/vacation.jpeg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/vacation.jpeg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Link
          to="/"
          className="md:w-[33%] w-[32.5%] lg:[40vh] md:h-[35vh] sm:h-[30vh] h-[25vh]"
          style={{
            backgroundImage: 'url("/images/vacation.jpeg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </>
  );
}

export default Tags
