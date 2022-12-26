import Image from "next/image";
import React from "react";
import CustomerIMG from "../../assets/img-customer-service.png";

const Solutions = () => {
  return (
    <section>
      <div className="py-16">
        <div className="px-6 sm:mx-20 md:mx-0">
          <div className="flex flex-col md:flex-row md:justify-center md:items-center flex-wrap md:flex-nowrap gap-4 lg:w-[928px] lg:h-[212.97px] lg:mx-auto">
            <div className="md:order-last">
              <Image src={CustomerIMG} alt="CustomerIMG" className="mx-auto" />
            </div>
            <div className="text-center">
              <h4 className="text-[#2728a9] text-4xl mb-4 font-bold ">
                Anda membutuhkan solusi layanan custom sesuai kebutuhan?
              </h4>
              <p className="text-[#737b9a] text-base my-4">
                Kontak kami dengan submit form di bawah untuk berkonsultasi
                perihal bagaimana CBNCloud dapat membantu Anda bertransformasi
                digital dengan AWS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
