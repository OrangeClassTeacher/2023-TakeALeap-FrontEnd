import React from "react";
import Image from "next/image";
import coca from "../../img/can-pepsi-zero-sugar.png";
import cat from "../../img/cat.jpeg";
import Starts from "../commentsRates/Stars";
import Link from "next/link";
import pep2 from "../../img/pep2.png";
import rocket from "../../img/rocket.png";
import { ITopComment } from "../InterfaceEnumsMeta/InterFace";
import { IUserPoint } from "../InterfaceEnumsMeta/InterFace";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function TopComments({
  lastComments,
  topConterbuter,
}: {
  lastComments: ITopComment[];
  topConterbuter: IUserPoint[];
}): JSX.Element {
  const route = useRouter();
  // const id = typeof window !== "undefined" ? localStorage.getItem("id") : "";

  return (
    <div className="text-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center ">
        <div className="hidden md:block w-full border border-gray-900 bg-gray-950 rounded p-5">
          <div className="coke">
            <div className="card2">
              <div className="circle" />
              <div className="content">
                <h2>Pepsi</h2>
                <p>Amnii tsangaag 10han second</p>
                <Link className="atag" href="/">
                  Buy now
                </Link>
              </div>
              <Image src={coca} width={100} height={30} alt="advert" />
            </div>
          </div>
          <div className="coke mt-20">
            <div className="card2">
              <div className="circle" />
              <div className="content">
                <h2>Pepsi</h2>
                <p>Amnii tsangaag 5han second</p>
                <Link className="atag" href="/">
                  Buy now
                </Link>
              </div>
              <Image src={pep2} width={100} height={30} alt="advert" />
            </div>
          </div>
        </div>
        <div className="basis-1 md:w-full">
          <div className="text-center text-3xl py-3">Recent Comments</div>
          <div className="m-0 md:mx-20 h-[600px] overflow-scroll ">
            {lastComments.length &&
              lastComments.map((item, ind) => (
                <div key={ind} className="flex p-4 items-center">
                  <div className="basis-1/12 mx-3">
                    <Image
                      src={item.userId?.img[0] ? item.userId.img[0] : cat}
                      alt="img"
                      width={40}
                      height={40}
                      className="rounded-full w-[50px] h-[50px] object-cover"
                    />
                  </div>
                  <div className="basis-11/12">
                    <div className=" bg-gray-900 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold">
                          {item.userId && item.userId.userName}
                        </p>
                        <div className="text-end">
                          <Starts stars={item.rate ? item.rate : 0} />
                        </div>
                      </div>
                      <span className="font-light my-1">{item.comment}</span>
                    </div>

                    <span className="flex items-center gap-2">
                      <span className="font-thin text-sm mx-2">
                        {item.createdAt.slice(0, 10)}
                      </span>
                      <p className={"font-thin text-sm"}>rated</p>
                      <div className="hover:text-[#9395d3]">
                        <Link href={`/restaurant?id=${item.restaurantId._id}`}>
                          {item.restaurantId.restaurantName}
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="hidden md:block w-full border border-gray-900 bg-gray-950 rounded p-5 h-full h-[100%] m-5">
          <div>
            <h1 className="text-xl text-center">Top Contritors</h1>
            <div className="scene">
              <div className="rocket">
                <Image
                  src={rocket}
                  alt="rocket"
                  className="w-full h-[30px] object-cover"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div>
            {topConterbuter.length &&
              topConterbuter.map((item, ind) => (
                <div
                  key={ind}
                  className="flex  items-center my-3"
                  onClick={(): void => {
                    const id =
                      typeof window !== "undefined"
                        ? localStorage.getItem("id")
                        : "";
                    id?.length
                      ? route.push(`profile?id=${item._id._id}`)
                      : toast.error("Login first!", {
                          position: "bottom-center",
                          autoClose: 2000,
                          hideProgressBar: false,
                          pauseOnHover: true,
                          progress: undefined,
                          theme: "colored",
                        });
                  }}>
                  <p className="basis-1/12">{ind + 1}.</p>
                  <div className="rounded-full basis-2/6 m-1">
                    <Image
                      src={item._id.img[0] ? item._id.img[0] : cat}
                      width={40}
                      height={40}
                      alt="profile"
                      className="rounded-full  w-[50px] h-[50px] object-cover"
                    />
                  </div>
                  <div className="basis-3/6 cursor-pointer hover:text-[#9395d3] w-full overflow-hidden truncate px-1">
                    {item._id.username}
                  </div>
                  <div className="basis-1/6">
                    <p className=" bg-sky-700  rounded p-1">{item.points}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
