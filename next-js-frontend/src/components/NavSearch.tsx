import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { TfiWorld } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import SignIn from "./SignIn";
import axios from "axios";
import { ISearch } from "./InterFace";
import { useRouter } from "next/router";
import Utils from "@/utils/helper";
import { SearchModal } from "./SearchModal";
import Image from "next/image";
import cat from "../img/cat.jpeg";
import { useContext } from "react";
import { UserContext } from "@/context/ContextConfig";

export const NavSearch = () => {
  const { userSign, setUserSign }: any = useContext(UserContext);
  const [signIn, setSignIn] = useState<boolean>(false);
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState<ISearch>();
  const [localToken, setLocalToken] = useState<String>("");
  const route = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("token") || "";
      setLocalToken(value);
    }
  }, [userSign]);

  useEffect(() => {
    axios
      .post(`${Utils.API_URL}/restaurant/search`, {
        searchTxt: searchInput,
      })
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => console.log(err));
  }, [searchInput]);

  return (
    <div>
      <div className="py-2 px-4 justify-between items-center hidden md:flex">
        <div className="basis-1/6">
          <h1 className="flex justify-between items-center text-4xl font-light">
            <Link href={"/"}>
              <div className="lynx">
                <span>LYNX</span>
              </div>
            </Link>
          </h1>
          <div className="nox">
            <div className="nightbar"></div>
            <div className="nopLayer"></div>
            <p className=" 2x1:px-16 py-0 text-xs underline">Find, Eat, Rate</p>
          </div>
        </div>
        <div className="basis-4/6 relative">
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
          <SearchModal search={search} setSearch={setSearch} data={data} />
        </div>

        <div className="basis-1/6 flex items-center gap-2 mx-2 justify-end font-light text-sm ">
          {localToken?.length > 1 ? (
            <div className="flex items-center gap-3">
              <Image
                src={userSign?.img[0] ? userSign?.img[0] : cat}
                alt="profile"
                width={50}
                height={50}
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div className="mr-10">
                <p
                  className="hover:text-[#9395d3] cursor-pointer uppercase"
                  onClick={() => route.push("/userprofile")}
                >
                  {localStorage.getItem("name")}
                </p>
                <Link href={"/"}>
                  <p
                    className="cursor-pointer hover:text-[#9395d3]"
                    onClick={() => {
                      if (confirm("Log out")) {
                        localStorage.clear();
                        setLocalToken("");
                        setUserSign();
                      }
                    }}
                  >
                    LOG OUT
                  </p>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <p className="text-4xl">
                <VscAccount />
              </p>
              <div className="uppercase">
                <p
                  className="hover:text-[#9395d3] cursor-pointer"
                  onClick={() => {
                    setSignIn(!signIn);
                  }}
                >
                  sign in
                </p>
                <Link href={"/register"}>
                  {" "}
                  <p className="hover:text-[#9395d3]">create account</p>
                </Link>
              </div>
            </div>
          )}
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
