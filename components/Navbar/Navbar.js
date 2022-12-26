import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import imageLogoWhite from "../../assets/img-logo-white.png";
import imageLogoColor from "../../assets/img-logo-color.png";

const Navbar = ({ visible }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleMouseOver = (e) => {
    setShow(true);
  };

  const handleMouseOut = (e) => {
    setShow(false);
  };
  const handleMouseOver2 = (e) => {
    setShow2(true);
  };

  const handleMouseOut2 = (e) => {
    setShow2(false);
  };
  const handleMouseOver3 = (e) => {
    setShow3(true);
  };

  const handleMouseOut3 = (e) => {
    setShow3(false);
  };

  const handleMouseOver4 = (e) => {
    setShow4(true);
  };

  const handleMouseOut4 = (e) => {
    setShow4(false);
  };

  return (
    <div
      className={`p-4 grid grid-cols-7 lg:grid-cols-10 xl:grid-cols-7 z-40  gap-4 lg:gap-0 fixed left-0 right-0 top-0 ${
        show || show2 || show3 || show4 || !visible
          ? "bg-white border-b-[#a1a1a1] duration-300 ease-out top-[-150px] "
          : "bg-transparent duration-150 ease-out "
      }    `}
    >
      <div className=" col-span-1 lg:col-span-2 xl:col-span-1">
        <Link href="/cmp">
          {show || show2 || show3 || show4 ? (
            <Image src={imageLogoColor} alt="brand-logo" />
          ) : (
            <Image src={imageLogoWhite} alt="brand-logo" />
          )}
        </Link>
      </div>
      <ul
        className={`flex justify-between col-span-6 lg:col-span-8 xl:col-span-6 text-sm   ${
          show || show2 || show3 || show4 ? "text-[#737b9a]" : "text-white"
        } font-medium`}
      >
        <div className="flex items-center gap-6">
          <li className="">
            <div
              onMouseLeave={handleMouseOut}
              className={` ${
                show || show2 || show3 || show4
                  ? "bg-white opacity-90  fixed  top-[68px] bottom-0  right-0 left-0 "
                  : "opacity-0 duration-150 "
              }   `}
            ></div>
            <Link
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              className={`pb-6 ${show && "text-black"} `}
              href="/"
            >
              Products
            </Link>
            <ul
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
              className={`bg-white absolute top-[68px]  right-0 left-0 px-4 py-10    ${
                show
                  ? "block  duration-300 opacity-100  "
                  : " py-0 px-0 opacity-0 duration-150 "
              }`}
            >
              <li
                className={` relative z-10 text-[#737b9a] grid grid-cols-3 lg:mx-auto lg:w-[1024px] ${
                  !show && "hidden"
                } `}
              >
                <div>
                  <Link
                    className="hover:text-black ease-out duration-300 "
                    href="/"
                  >
                    Compute
                  </Link>
                  <ul className="text-[#a1a1a1] text-xs grid grid-cols-2 gap-1">
                    <li>
                      <Link href="/">Public Cloud</Link>
                    </li>
                    <li>
                      <Link href="/">Private Cloud</Link>
                    </li>
                    <li>
                      <Link href="/">Hybrid Cloud</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    className="hover:text-black ease-out duration-300 "
                    href="/"
                  >
                    Backup
                  </Link>
                  <ul className="text-[#a1a1a1] text-xs">
                    <li>
                      <Link href="/">Cyber Backup & Cyber Backup</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    className="hover:text-black ease-out duration-300 "
                    href="/"
                  >
                    Applications
                  </Link>
                  <ul className="text-[#a1a1a1] text-xs grid grid-cols-3 gap-1">
                    <li>
                      <Link href="/">Office365</Link>
                    </li>
                    <li>
                      <Link href="/">GSuite</Link>
                    </li>
                    <li>
                      <Link href="/">SpamExpert</Link>
                    </li>
                    <li className="col-span-3">
                      <Link href="/">Email Marketing & API</Link>
                    </li>
                    <li className="col-span-3">
                      <Link href="/">Enterprise Email Security</Link>
                    </li>
                  </ul>
                </div>
                <div className="pt-5">
                  <Link
                    className="hover:text-black ease-out duration-300 "
                    href="/"
                  >
                    Value Added Services
                  </Link>
                  <ul className="text-[#a1a1a1] text-xs grid grid-cols-2 gap-1">
                    <li>
                      <Link href="/">Domain</Link>
                    </li>
                    <li>
                      <Link href="/">SSL</Link>
                    </li>
                    <li className="col-span-2">
                      <Link href="/">Web Vulnerability Scanner</Link>
                    </li>
                  </ul>
                </div>

                <Link
                  className="pt-5 hover:text-black ease-out duration-300 "
                  href="/"
                >
                  Managed Services
                </Link>
              </li>
            </ul>
          </li>
          <li className=" ">
            <Link
              onMouseEnter={handleMouseOver2}
              onMouseLeave={handleMouseOut2}
              className={`peer pb-6 ${show2 && "text-black"} `}
              href="/"
            >
              Solutions
            </Link>
            <ul
              onMouseEnter={handleMouseOver2}
              onMouseLeave={handleMouseOut2}
              className={`bg-white absolute top-[68px] right-0 left-0 px-4 py-10  ${
                show2
                  ? "block duration-300 opacity-100"
                  : "py-0 px-0 opacity-0 duration-150"
              }`}
            >
              <li
                className={` relative z-10 text-[#737b9a]  font-medium grid grid-cols-3 gap-5 lg:mx-auto lg:w-[1024px] ${
                  !show2 && "hidden"
                } `}
              >
                <div>
                  <Link
                    className="hover:text-black ease-out duration-300 "
                    href="/"
                  >
                    Cloud Collaboration
                  </Link>
                  <ul className="text-[#a1a1a1] text-xs ">
                    <li>
                      Companies are now relying on team collaboration to
                      innovate despite any special circumstances
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    className="hover:text-black ease-out duration-300 "
                    href="/"
                  >
                    Disaster Recovery
                  </Link>
                  <ul className="text-[#a1a1a1] text-xs">
                    <li>Built on our trusted platforms.</li>
                  </ul>
                </div>
                <div>
                  <Link
                    className="hover:text-black ease-out duration-300 "
                    href="/"
                  >
                    Cloud Hosting
                  </Link>
                  <ul className="text-[#a1a1a1] text-xs ">
                    <li>
                      We provide you the overall benefits of quality cloud
                      hosting for your site
                    </li>
                  </ul>
                </div>
                <div className="pt-5">
                  <Link
                    className="hover:text-black ease-out duration-300 "
                    href="/"
                  >
                    Multicloud Implementation
                  </Link>
                  <ul className="text-[#a1a1a1] text-xs ">
                    <li>
                      Use multiple cloud services to house your business’s
                      functions
                    </li>
                  </ul>
                </div>

                <div className="pt-5">
                  <Link
                    className="hover:text-black ease-out duration-300 "
                    href="/"
                  >
                    Application Modernization
                  </Link>
                  <ul className="text-[#a1a1a1] text-xs ">
                    <li>
                      Enables you to modernize your existing apps, build and run
                      them
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li className=" cursor-pointer  bg-[#E5493D] hover:bg-[#f26055] ease-out duration-300 rounded-full py-2 px-6">
            <Link
              className={
                (show2 && "text-white") ||
                (show && "text-white") ||
                (show3 && "text-white") ||
                (show4 && "text-white")
              }
              href="/"
            >
              % Promo
            </Link>
          </li>
        </div>
        <div className="flex  items-center gap-6">
          <li className=" ">
            <Link
              onMouseEnter={handleMouseOver3}
              onMouseLeave={handleMouseOut3}
              className={` pb-6 ${show3 && "text-black"} `}
              href="/"
            >
              About Us
            </Link>
            <ul
              onMouseEnter={handleMouseOver3}
              onMouseLeave={handleMouseOut3}
              className={`bg-white absolute top-[68px] right-[80px] px-6 py-4 gap-8 flex flex-col ${
                show3
                  ? "block duration-300 opacity-100"
                  : "py-0 px-0 opacity-0 duration-150"
              } `}
            >
              <div
                className={` flex flex-col gap-6 relative z-10 ${
                  !show3 && "hidden"
                } `}
              >
                <li
                  className={`text-[#737b9a] hover:text-black ease-out duration-300   
                 
                `}
                >
                  <Link href="/">Company</Link>
                </li>
                <li className="text-[#737b9a] hover:text-black ease-out duration-300 ">
                  <Link href="/">Publications</Link>
                </li>
                <li className="text-[#737b9a] hover:text-black ease-out duration-300 ">
                  <Link href="/">Contact</Link>
                </li>
              </div>
            </ul>
          </li>
          <li className="">
            <Link
              onMouseEnter={handleMouseOver4}
              onMouseLeave={handleMouseOut4}
              className={` py-6 ${show4 && "text-black"} `}
              href="/"
            >
              Supports
            </Link>
            <ul
              onMouseEnter={handleMouseOver4}
              onMouseLeave={handleMouseOut4}
              className={`bg-white absolute top-[68px] right-5 px-6 py-4 gap-8 flex flex-col  ${
                show4
                  ? "block duration-300 opacity-100"
                  : "py-0 px-0 opacity-0 duration-150"
              }`}
            >
              <div
                className={` flex flex-col gap-6 relative z-10 ${
                  !show4 && "hidden"
                } `}
              >
                <li className="text-[#737b9a] hover:text-black ease-out duration-300 ">
                  <Link href="/">Terms and Conditions</Link>
                </li>
                <li className="text-[#737b9a] hover:text-black ease-out duration-300 ">
                  <Link href="/">CBNCloud Wiki</Link>
                </li>
              </div>
            </ul>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
