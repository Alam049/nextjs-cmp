import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LogoWhite from "../../assets/img-logo-white.png";
import LogoColor from "../../assets/img-logo-color.png";
import Link from "next/link";
import { navItems } from "./data";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const HumbergerMenu = () => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const handleButton = () => {
    setShow(!show);
  };

  const style = { color: "white" };

  return (
    <div
      className={`flex items-center justify-between p-4  ${
        show && "bg-white  shadow-2xl duration-300 ease-out"
      } `}
    >
      <div>
        {show ? (
          <Image src={LogoColor} alt="LogoCMPWhite" width={98} height={28} />
        ) : (
          <Image src={LogoWhite} alt="LogoCMPWhite" width={98} height={28} />
        )}
      </div>
      <div
        className={` ${
          show
            ? "bg-white opacity-100  fixed  top-[59px] bottom-0 right-0 left-0"
            : "opacity-0 duration-300 "
        }   `}
      ></div>
      <div className="pt-2">
        <div
          className={` bg-white absolute  top-0 min-h-screen drop-shadow-2xl z-20 ${
            show
              ? " opacity-100 right-0 left-14 duration-300"
              : "right-0 left-[100px] opacity-0 duration-300"
          } `}
        >
          <div className="flex items-center justify-between p-5 pt-6">
            <p className="text-[#a1a1a1] text-sm font-medium">Menus</p>
            <button onClick={handleButton}>
              {show ? (
                <AiOutlineClose />
              ) : (
                <AiOutlineMenu className="text-white" />
              )}
            </button>
          </div>
          <ul className="text-[#a1a1a1]  p-4 flex flex-col gap-3 ">
            <li
              className="cursor-pointer text-sm"
              onClick={() => setModal(true)}
            >
              Products
            </li>
            <li className="cursor-pointer" onClick={() => setModal2(true)}>
              Solutions
            </li>
            <li className="bg-[#e5493d] text-white rounded-2xl px-6 py-3">
              <Link href="/">% Promo</Link>
            </li>
            <Accordion allowZeroExpanded>
              {navItems.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="pt-2">
                      {item.label}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {item.children.map((item, index) => (
                      <AccordionItem key={index}>
                        <AccordionItemHeading>
                          <AccordionItemButton className="pl-4 pt-3">
                            {item.label}
                          </AccordionItemButton>
                        </AccordionItemHeading>
                      </AccordionItem>
                    ))}
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </ul>
        </div>
        {!show && <AiOutlineMenu className="text-white" />}
      </div>

      <div
        className={`absolute  z-30 right-0 left-14  bg-white   px-8 py-5 ${
          modal
            ? "top-0 min-h-screen opacity-100 duration-500"
            : " top-[-450px] min-h-0 px-0 py-0 opacity-0 duration-300"
        } `}
      >
        <button
          className="flex items-center float-right gap-2"
          onClick={() => setModal(false)}
        >
          <span className="text-[#a1a1a1] text-sm"> Close</span>{" "}
          <span className="pt-1">
            <AiOutlineClose />
          </span>
        </button>
        <ul className={`pt-[50px] `}>
          <li className="text-[#0055A4] font-medium">
            <Link href="/">Compute</Link>
          </li>
          <ul className="pt-1 grid grid-cols-2 gap-1 text-[#a1a1a1] text-sm">
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
          <li className="text-[#0055A4] font-medium pt-5">
            <Link href="/">Backup</Link>
          </li>
          <ul className="pt-1 text-[#a1a1a1] text-sm">
            <li>
              <Link href="/">Cyber Backup & Cyber Backup</Link>
            </li>
          </ul>
          <li className="text-[#0055A4] font-medium pt-5">
            <Link href="/">Applications</Link>
          </li>
          <ul className="pt-1 grid grid-cols-3 gap-1 text-[#a1a1a1] text-sm">
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
          <li className="text-[#0055A4]  font-medium pt-5">
            <Link href="/">Value Added Services</Link>
          </li>
          <ul className="pt-1 text-[#a1a1a1] text-sm grid grid-cols-2 gap-1">
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
          <li className="text-[#0055A4]  font-medium pt-5">
            <Link href="/">Managed Service</Link>
          </li>
        </ul>
      </div>

      <div
        className={`absolute  z-30  right-0 left-14 bg-white   px-8 py-5 ${
          modal2
            ? " top-0 min-h-screen opacity-100 duration-500"
            : "top-[-450px] min-h-0 px-0 py-0 opacity-0 duration-300"
        } `}
      >
        <button
          className="flex items-center float-right gap-2"
          onClick={() => setModal2(false)}
        >
          <span className="text-[#a1a1a1] text-sm"> Close</span>{" "}
          <span className="pt-1">
            <AiOutlineClose />
          </span>
        </button>
        <ul className="pt-[50px] ">
          <li className="text-[#0055A4] font-medium">
            <Link href="/">Cloud Collaboration</Link>
          </li>
          <p className="pt-1  text-[#a1a1a1] text-sm">
            Companies are now relying on team collaboration to innovate despite
            any special circumstances
          </p>
          <li className="text-[#0055A4] font-medium pt-5">
            <Link href="/">Disaster Recovery</Link>
          </li>
          <p className="pt-1 text-[#a1a1a1] text-sm">
            Built on our trusted platforms.
          </p>
          <li className="text-[#0055A4] font-medium pt-5">
            <Link href="/">Cloud Hosting</Link>
          </li>
          <p className="pt-1  text-[#a1a1a1] text-sm">
            We provide you the overall benefits of quality cloud hosting for
            your site
          </p>
          <li className="text-[#0055A4]  font-medium pt-5">
            <Link href="/">Multicloud Implementation</Link>
          </li>
          <p className="pt-1 text-[#a1a1a1] text-sm ">
            Use multiple cloud services to house your business’s functions
          </p>
          <li className="text-[#0055A4]  font-medium pt-5">
            <Link href="/">Application Modernization</Link>
          </li>
          <p className="pt-1 text-[#a1a1a1] text-sm ">
            Enables you to modernize your existing apps, build and run them
          </p>
        </ul>
      </div>
    </div>
  );
};

export default HumbergerMenu;
