import Image from "next/image";
import React from "react";
import { itemDescriptions } from "./data";
import Opex from "../../assets/img-opex.png";
import Scalable from "../../assets/img-scalable.png";
import SisAman from "../../assets/img-sistem-keamanan.png";
import Konektivitas from "../../assets/img-konektivitas.png";
import Interkoneksi from "../../assets/img-interkoneksi.png";

const Description = () => {
  return (
    <section>
      <div className="box-border px-6">
        <div className="py-16">
          {itemDescriptions.map((item, index) => (
            <div
              key={index}
              className="py-8 text-left flex flex-wrap sm:flex-nowrap sm:flex-row sm:items-center flex-col items-start gap-6 lg:w-[928px] lg:h-[302.95px] lg:mx-auto"
            >
              {index === 0 && (
                <Image
                  src={Opex}
                  alt="OpexImg"
                  className=" sm:w-[132.47px] sm:h-[147.19px] md:w-[176.63px] md:h-[196.25px]"
                  width={171}
                />
              )}
              {index === 1 && (
                <Image
                  src={Scalable}
                  alt="ScalableImg"
                  width={171}
                  className="sm:w-[132.47px] sm:h-[147.19px] md:w-[176.63px] md:h-[196.25px]"
                />
              )}
              {index === 2 && (
                <Image
                  src={SisAman}
                  alt="SisAmanImg"
                  width={171}
                  className="sm:w-[132.47px] sm:h-[147.19px] md:w-[176.63px] md:h-[196.25px]"
                />
              )}
              {index === 3 && (
                <Image
                  src={Konektivitas}
                  alt="KonektivitasImg"
                  width={171}
                  className="sm:w-[132.47px] sm:h-[147.19px] md:w-[176.63px] md:h-[196.25px]"
                />
              )}
              {index === 4 && (
                <Image
                  src={Interkoneksi}
                  alt="InterkoneksiImg"
                  width={171}
                  className="sm:w-[132.47px] sm:h-[147.19px] md:w-[176.63px] md:h-[196.25px] "
                />
              )}
              <div className="text-left">
                <h4 className="font-bold text-lg text-[#2728a9] mb-4">
                  {item.label}
                </h4>
                <p className="text-[#737b9a] text-base my-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Description;
