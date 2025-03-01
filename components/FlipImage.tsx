import Image from "next/image";
import sideImage from "../public/me.jpg";
import React from "react";

const FlipImage = () => {
  return (
    <div className="w-64 h-60">
      <div className="w-full h-full border-l-[20px] border-r-[20px] border-b-[20px] border-gray-900 dark:border-gray-200 relative">
        <Image
          src={sideImage}
          alt="Me | Karan Joshi"
          className="w-48 h-60 absolute -top-8 left-3 transition-transform duration-500 transform origin-center hover:rotate-x-180"
        />
      </div>
    </div>
  );
};

export default FlipImage;
