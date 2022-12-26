import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import HumbergerMenu from "../components/Navbar/HumbergerMenu";
import Banner from "../components/Banner/Banner";
import Introduction from "../components/Sections/Introduction";
import Feature from "../components/Sections/Feature";
import Description from "../components/Sections/Description";
import Layanan from "../components/Sections/Layanan";
import Solutions from "../components/Sections/Solutions";
import FormConsul from "../components/Sections/FormConsul";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";

const Home = () => {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }
  return (
    <div>
      <hmtl className="scroll-smooth">
        <Head>
          <title>Landing Page CMP Website</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className=" bg-[#4443D1] pb-16 mb-16 ">
          <div className="md:hidden">
            <HumbergerMenu />
          </div>
          <div className="hidden md:block">
            <Navbar visible={visible} />
          </div>
          <div className="px-2">
            <Banner />
          </div>
        </header>
        <main>
          <Introduction />
          <Feature />
          <Description />
          <Layanan />
          <Solutions />
          <FormConsul />
        </main>

        <Footer />
      </hmtl>
    </div>
  );
};

export default Home;
