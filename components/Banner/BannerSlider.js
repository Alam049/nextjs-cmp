import Image from "next/image";
import BannerIMG from "../../assets/img-banner.png";

import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className=" px-4 lg:flex lg:items-center lg:justify-center   ">
      <Image
        src={BannerIMG}
        alt="BannerIMG"
        className="  lg:px-4 lg:object-contain lg:order-last lg:w-[448px] lg:h-[269.5px]"
      />
    </div>
  );
};

export default Banner;
