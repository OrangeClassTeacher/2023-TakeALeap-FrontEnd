import React, { Dispatch, useEffect, useState } from "react";
import { GrFormClose } from "react-icons/Gr";
import { TfiWorld } from "react-icons/Tfi";
import { VscAccount } from "react-icons/Vsc";
import Link from "next/link";
import { BiSearch } from "react-icons/Bi";
import { FiMenu } from "react-icons/Fi";
import SignIn from "./SignIn";
import axios from "axios";
import { search } from "./InterFace";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

export const NavSearch = () => {
  const [signIn, setSignIn] = useState<boolean>(false);
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState<search>();

  useEffect(() => {
    axios
      .post(`http://localhost:8080/api/restaurant/search`, {
        searchTxt: searchInput,
      })
      .then((res) => setData(res.data.result))
      .catch((err) => console.log(err));
  }, [searchInput]);

  return (
    <div>
      <div className="flex px-4 justify-between items-center hidden md:flex">
        <div className="basis-1/6">
          <h1 className="flex justify-between items-center text-4xl font-light">
            <Link href={"/"}> LYNX</Link>
          </h1>
          <p className=" 2x1:px-16 py-0 text-xs underline">Find, Eat, Rate</p>
        </div>
        <div className="basis-3/6 relative">
          <div className="flex gap-2 h-9 ">
            <div className="bg-slate-200 rounded flex w-full justify-between items-center p-2">
              <input
                type="text w-full"
                placeholder="Search"
                className="bg-slate-200"
                value={searchInput}
                style={{ outline: "none", color: "black", width: "100%" }}
                onChange={(e) => setSearchInput(e.target.value)}
                onClick={() => setSearch(true)}
              />
              <GrFormClose
                onClick={() => {
                  setSearch(false);
                  setSearchInput("");
                }}
              />
            </div>
          </div>
          <div
            className="absolute bg-white top-12 w-[900px] h-[400px] rounded text-black p-10 overflow-scroll"
            style={{ display: search ? "block" : "none" }}>
            <div className="absolute right-5 top-5">
              {" "}
              <IoMdClose
                className="text-2xl hover:text-sky-600"
                onClick={() => setSearch(false)}
              />
            </div>
            <div>
              <div className="flex justify-between border-b">
                <h1>Foods</h1>
                <p>
                  Found :{" "}
                  {data?.food.rowCountOfFood ? data?.food.rowCountOfFood : 0}
                </p>
              </div>
              <div className="grid grid-cols-4 p-10">
                {data?.food?.food.map((item, ind) => {
                  if (ind < 8) {
                    return (
                      <Link href={`/food?id=${item._id}`} key={ind}>
                        <div className="m-2 rounded bg-white ">
                          <div className="m-3 w-[150px] h-[100px] object-cover">
                            <Image
                              src={item.img[0]}
                              width={150}
                              height={100}
                              alt="img"
                              className="rounded w-[150px] h-[100px]"
                            />
                          </div>
                          <div className="text-center">
                            <h1 className="text-sm font-semibold uppercase mt-1">
                              {item.foodName}
                            </h1>
                            <p className="text-xs">Price : {item.price}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
            <div>
              <div className="flex justify-between border-b">
                <h1>Restaurants</h1>
                <p>
                  Found :{" "}
                  {data?.restaurant.rowCountOfRes
                    ? data?.restaurant.rowCountOfRes
                    : 0}
                </p>
              </div>
              <div className="grid grid-cols-4 p-10">
                {data?.restaurant?.restaurant.map((item, ind) => {
                  if (ind < 8) {
                    return (
                      <Link href={`/restaurant?id=${item._id}`} key={ind}>
                        <div className="m-2 rounded bg-white ">
                          <div className="m-3 w-[150px] h-[100px] object-cover">
                            <Image
                              src={item.img[0]}
                              width={150}
                              height={150}
                              alt="img"
                              className="rounded  w-[150px] h-[100px] "
                            />
                          </div>
                          <div className="text-center">
                            <h1 className="text-sm font-semibold uppercase mt-1">
                              {item.restaurantName}
                            </h1>
                            <p className="text-xs">
                              Cuisine Type : {item.cuisineType}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/6 flex items-center gap-2 mx-2 justify-end font-light text-sm">
          <p className="text-4xl">
            <TfiWorld />
          </p>
          <Link href={"/explore"}>
            <p className="hover:text-sky-400">EXPLORE</p>
          </Link>
        </div>
        <div className="basis-1/6 flex items-center gap-2 mx-2 justify-end font-light text-sm">
          <p className="text-4xl">
            <VscAccount />
          </p>
          <div className="uppercase">
            <p
              className="hover:text-sky-400 cursor-pointer"
              onClick={() => {
                setSignIn(!signIn);
              }}>
              sign in
            </p>
            <Link href={"/register"}>
              {" "}
              <p className="hover:text-sky-400">create account</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex px-4 justify-between items-center  md:hidden">
        <div className="flex gap-2">
          {" "}
          <FiMenu />
          <BiSearch />
        </div>
        <div className="flex items-center gap-2 my-3">
          <TfiWorld />
          Explore
        </div>
      </div>
      <div style={{ display: signIn ? "block" : "none" }}>
        <SignIn signIn={signIn} setSignIn={setSignIn} />
      </div>
    </div>
  );
};
