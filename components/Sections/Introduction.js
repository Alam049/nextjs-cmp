import Image from "next/image";
import React from "react";
import SolusiLayanan from "../../assets/img-solusi-layanan.png";

const Introduction = () => {
  return (
    <section>
      <div className="py-16 ">
        <div className="px-6">
          <div className="text-center lg:flex lg:flex-wrap lg:items-center lg:justify-center  box-border">
            <div className="">
              <Image
                src={SolusiLayanan}
                alt="ImageSolusiLayanan"
                className="w-1/2 mx-auto lg:w-[287.98px] lg:h-[414.34px] "
              />
            </div>

            <div className="md:text-left lg:w-[639.98px] lg:h-[324.5px] lg:px-4 ">
              <h2 className="text-[#2728a9] font-bold text-2xl md:text-4xl mb-4">
                Solusi Layanan Cloud dari Hulu ke Hilir
              </h2>
              <h4 className="text-[#b81307] text-lg font-bold mb-4">
                CBNCloud & AWS berkomitmen untuk memfasilitasi kebutuhan
                pelanggan dengan inovasi teknologi terkini serta rangkaian
                solusi cloud menyeluruh dari hulu ke hilir.
              </h4>
              <p className="text-[#737b9a] text-base my-4">
                Cloud expert kami yang tersertifikasi telah membantu ratusan
                organisasi dari industri multi sektor untuk memigrasikan beban
                kerja krusial, penempatan aplikasi di multi-cloud, penempatan
                data sumber daya berskala besar di Indonesia, guna
                mengoptimalkan performa bisnis dan meningkatkan profitabilitas
                jangka panjang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
