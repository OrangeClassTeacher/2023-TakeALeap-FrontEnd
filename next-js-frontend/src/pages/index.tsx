import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

import Image from 'next/image';

import card1 from '../img/card1.jpg';
import card2 from '../img/card2.png';
import card3 from '../img/card3.jpg';
import card4 from '../img/card4.jpg';
import {Rating} from '../components/Rating';

const imagesItems = [
    <Image key={1} className="h-full w-full" src={card1} alt='testt' />,
    <Image key={2} className="h-full w-full" src={card2} alt="teste" />,
    <Image key={3} className="h-full w-full" src={card3} alt="teste" />,
    <Image key={4} className="h-full w-full" src={card4} alt="teste" />,
  ];
  

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-bg text-white">
      <Head>
        <title>LYNX</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mb-10 flex flex-col  justify-center space-y-6">
          {/* <h1 className="text-4xl font-bold md:text-5xl">Beautiful animated gradients</h1> */}
          {/* <p className="text-center text-xs opacity-75">
            Explore, generate and use seamless animation gradients for your next projects
          </p> */}
        </div>
        <Carousel items={imagesItems} />
        <h1>star</h1>
        <Rating />
      </main>
    </div>
  );
};

export default Home;
