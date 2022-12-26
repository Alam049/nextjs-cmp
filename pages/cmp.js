import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HumbergerMenu from "../components/Navbar/HumbergerMenu";
import Footer from "../components/Footer/Footer";
import BannerSlider from "../components/Banner/BannerSlider";
import Head from "next/head";

const cmp = () => {
  return (
    <div>
      <Head>
        <title>CMP Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" bg-[#4443D1] pb-16 mb-16 ">
        <div className="md:hidden">
          <HumbergerMenu />
        </div>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="px-2">
          <BannerSlider />
        </div>
      </header>
      <main></main>
      <Footer />
    </div>
  );
};

export default cmp;
