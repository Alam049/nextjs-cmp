import Image from "next/image";
import Link from "next/link";
import React from "react";
import { itemService } from "./data";
import Opex from "../../assets/img-icon-opex.png";
import Scalable from "../../assets/img-icon-scalable.png";
import SisAman from "../../assets/img-icon-sistem-keamanan.png";
import Konektivitas from "../../assets/img-icon-konektivitas.png";
import InterKoneksi from "../../assets/img-icon-interkoneksi.png";

const Feature = () => {
  return (
    <section className="mb-16 relative">
      <div className="text-center px-6">
        <h2 className="text-2xl sm:text-4xl text-[#2728a9] mb-4 font-bold">
          Keunggulan yang Anda Dapatkan
        </h2>
        <h4 className="text-lg text-[#b81307] mb-24 font-bold">
          Benefit Amazon Web Services
        </h4>
      </div>
      <div className="bg-[#D7E0F4] relative box-border">
        <div className="px-6">
          <div className=" flex flex-wrap flex-row gap-x-4 gap-y-4 justify-center relative top-[-64px] lg:w-[928px] lg:h-[551px] lg:mx-auto ">
            {itemService.map((item, index) => (
              <div
                key={index}
                className="p-4  bg-[#2728a9] text-white text-center rounded-2xl flex-col flex flex-grow-0 flex-shrink basis-[80%] sm:basis-[45%] md:basis-[30%] "
              >
                {index === 0 && (
                  <Image
                    src={Opex}
                    alt="OpexImg"
                    className="mx-auto w-[128px] h-[128px]"
                  />
                )}
                {index === 1 && (
                  <Image
                    src={Scalable}
                    alt="ScalableImg"
                    className="mx-auto w-[128px] h-[128px]"
                  />
                )}
                {index === 2 && (
                  <Image
                    src={SisAman}
                    alt="SisAmanImg"
                    className="mx-auto w-[128px] h-[128px]"
                  />
                )}
                {index === 3 && (
                  <Image
                    src={Konektivitas}
                    alt="KonektivitasImg"
                    className="mx-auto w-[128px] h-[128px]"
                  />
                )}
                {index === 4 && (
                  <Image
                    src={InterKoneksi}
                    alt="InterKoneksiImg"
                    className="mx-auto w-[128px] h-[128px]"
                  />
                )}
                <p className="text-sm mb-2 pt-3">{item.label}</p>
                <Link className="text-sm underline " href={item.link}>
                  {item.linkname}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
