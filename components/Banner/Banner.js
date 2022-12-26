import Image from "next/image";
import BannerIMG from "../../assets/img-banner.png";
import React from "react";
import Link from "next/link";
import Wave from "../../assets/wave.png";

const Banner = () => {
  return (
    <div className=" px-4 lg:flex lg:items-center lg:justify-center   ">
      <Image
        src={BannerIMG}
        alt="BannerIMG"
        className="  lg:px-4 lg:object-contain lg:order-last lg:w-[448px] lg:h-[269.5px]"
      />

      <div className=" pt-[30px] text-center md:text-left lg:px-4 lg:w-[480px] lg:h-[415.63px] ">
        <h1 className="text-4xl md:text-5xl font-bold text-white my-5 md:my-7">
          Bertransformasi dengan Amazon Web Services
        </h1>
        <p className="text-sm text-white font-medium mt-4 mb-8 md:mt-8 ">
          Nikmati kemudahan layanan berbasis cloud yang akan membantu organisasi
          Anda bergerak lebih cepat, meningkatkan efisiensi biaya IT, aman,
          scalable, dan fleksibel dengan Amazon Web Services dari manapun Anda
          berada, bersama CBNCloud.
        </p>
        <div className="pb-4 pt-2">
          <Link
            className="mb-4 bg-[#ff6d00] hover:bg-[#ffa7a3] ease-out duration-300 text-white border-2 border-transparent rounded-full text-sm py-[6px] px-8"
            href="/#formconsul"
            scroll={false}
          >
            Jadwalkan Meeting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
