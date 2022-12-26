import React from "react";
import { itemFooter } from "./data";
import LogoColor from "../../assets/img-logo-color.png";
import Image from "next/image";
import Link from "next/link";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const styleIcon = { color: "#2728a9" };

  return (
    <footer>
      <div className="py-16 text-[#737b9a]">
        <div className="px-4">
          <div className="lg:flex lg:justify-evenly">
            <div className="px-4 grid grid-cols-2 md:grid-cols-4 lg:gap-8">
              {itemFooter.map((item, index) => (
                <div key={index} className="px-4 mb-8">
                  <h5 className="text-[#2728a9] text-sm pb-2 mb-4 font-bold">
                    {item.label}
                  </h5>
                  {item.children.map((itemChild, index) => (
                    <ul key={index}>
                      <li className="py-2 text-xs hover:text-[#2728a9] ease-out duration-300">
                        <Link href={itemChild.link}>{itemChild.label}</Link>
                      </li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
            <div className="px-4 lg:w-[240px] lg:h-[212.67px]">
              <Image
                src={LogoColor}
                alt="LogoColorCMP"
                className="mb-2 mx-auto lg:mx-0"
              />
              <div className="mt-5 mb-6 text-center lg:text-left text-xs flex flex-col gap-1">
                <span>Cyber 2 Tower, 8th Floor</span>
                <span>Jl. HR Rasuna Said Blok X5 No. 13</span>
                <span>Jakarta Selatan 12950</span>
              </div>
              <div className="text-xs text-center lg:text-left my-5">
                <span>Phone: </span>

                <Link className="text-[#2728a9] font-bold" href="/">
                  (62-21) 2996 4977
                </Link>
              </div>
              <div className="mt-2 flex justify-center gap-1">
                <div className="rounded-full p-2 bg-[#dfe7fe] border hover:bg-[#2728a9] ease-out duration-300">
                  <Link href="https://www.facebook.com/CBNCloud/">
                    <FiFacebook
                      size={16}
                      className="hover:text-white text-[#2728a9] ease-out duration-300"
                    />
                  </Link>
                </div>
                <div className="rounded-full p-2 bg-[#dfe7fe] border hover:bg-[#2728a9] ease-out duration-300">
                  <Link
                    className=""
                    href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F2938360%3Ftrk%3Dtyah%26trkInfo%3DtarId%253A1413432939575%252Ctas%253Acbn%2520cloud%252Cidx%253A1-1-1"
                  >
                    <FiLinkedin
                      className="hover:text-white text-[#2728a9] ease-out duration-300"
                      size={16}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
