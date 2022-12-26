import Image from "next/image";
import React from "react";
import { itemLayanan } from "./data";
import AWSDirect from "../../assets/img-aws-direct.png";
import CloudMigrations from "../../assets/img-cloud-migration.png";
import Consulting from "../../assets/img-consulting.png";

const Layanan = () => {
  return (
    <section>
      <div className="py-16">
        <div className="px-6">
          <h2 className="text-center text-[#2728a9] font-bold text-2xl mb-4 ">
            Telusuri Layanan Unggulan <br />
            AWS x CBNCloud
          </h2>
          <div className="grid grid-cols-2 gap-4 lg:w-[928px] lg:h-[791.25px] lg:mx-auto">
            {itemLayanan.map((item, index) => (
              <div
                key={index}
                className={`text-center text-white text-base bg-[#2728a9] p-4 rounded-2xl mt-16 ${
                  index === 2 && "grid col-span-2"
                } `}
              >
                {index === 0 && (
                  <Image
                    src={AWSDirect}
                    alt="AWSDirectConnect"
                    width={128}
                    className="mx-auto relative top-[-70px]"
                  />
                )}
                {index === 1 && (
                  <Image
                    src={CloudMigrations}
                    alt="CloudMigrations"
                    width={128}
                    className="mx-auto relative top-[-70px]"
                  />
                )}
                {index === 2 && (
                  <Image
                    src={Consulting}
                    alt="ConsultingManagedService"
                    width={128}
                    className="mx-auto relative top-[-70px]"
                  />
                )}
                <div className="relative top-[-30px]">
                  <h4 className="font-bold mb-5">{item.label}</h4>
                  <p className="mb-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
