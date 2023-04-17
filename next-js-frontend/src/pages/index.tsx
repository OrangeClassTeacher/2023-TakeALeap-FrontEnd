import type { NextPage } from "next";
import Head from "next/head";
import Carousel from "../components/Carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import card1 from "../img/card1.jpg";
import card2 from "../img/card2.png";
import card3 from "../img/card3.jpg";
import card4 from "../img/card4.jpg";
import { Rating } from "../components/Rating";

const imagesItems = [
  {
    img: <Image key={1} className="h-full w-full" src={card1} alt="testt" />,
    title: "hi1",
  },
  {
    img: <Image key={2} className="h-full w-full" src={card2} alt="teste" />,
    title: "hi2",
  },
  {
    img: <Image key={3} className="h-full w-full" src={card3} alt="teste" />,
    title: "hi3",
  },
  {
    img: <Image key={4} className="h-full w-full" src={card4} alt="teste" />,
    title: "hi4",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className=" relative">
        {" "}
        <Carousel items={imagesItems} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
