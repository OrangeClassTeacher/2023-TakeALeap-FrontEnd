<<<<<<< HEAD
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
        
      </main>
      
    </div>
    
=======
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div
        id="controls-carousel"
        className="relative w-full"
        data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFKYcXuM4onp47mQIIb5AgwVG6EXUWuZ6HGw7-7s&s"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active">
            <img
              src="/docs/images/carousel/carousel-2.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-3.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-4.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-5.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-white dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <Footer />
    </>
>>>>>>> f44ea33e09d01c45ec2683776331082c46304199
  );
};

export default Home;
