import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { TfiWorld } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import SignIn from "../SignIn";
import axios from "axios";
import { ISearch } from "../InterfaceEnumsMeta/InterFace";
import { useRouter } from "next/router";
import Utils from "@/utils/helper";
import { SearchModal } from "../SearchModal";
import Image from "next/image";
import cat from "../../img/cat.jpeg";
import { useContext } from "react";
import { UserContext } from "@/utils/ContextConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NavSearch = (): JSX.Element => {
  const { userSign, setUserSign }: any = useContext(UserContext);
  const [signIn, setSignIn] = useState<boolean>(false);
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState<ISearch>();
  const [localToken, setLocalToken] = useState<string>("");
  const route = useRouter();

  useEffect((): void => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("token") || "";
      setLocalToken(value);
    }
  }, [userSign]);

  useEffect((): void => {
    axios
      .post(`${Utils.API_URL}/restaurantsearch`, {
        searchTxt: searchInput,
      })
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => console.log(err));
  }, [searchInput]);

  const handleLogout = (): void => {
    toast.warn(
      <div>
        <p>Are you sure you want to log out?</p>
        <div className="flex justify-center mt-4 gap-1">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
            onClick={(): void => {
              logout();
              toast.dismiss();
            }}>
            Ok
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            onClick={(): void => toast.dismiss()}>
            Cancel
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  const logout = (): void => {
    toast.success("Logged out", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    route.push("/");
    setLocalToken("");
    setUserSign();
    localStorage.clear();
  };

  return (
    <div>
      <div className="bg-black p-5 justify-between items-center hidden md:flex ">
        <div className="basis-1/6">
          <h1 className="flex justify-between items-center text-4xl font-light">
            <Link href={"/"}>
              <div className="lynx">
                <span>LYNX</span>
              </div>
            </Link>
          </h1>
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
                onChange={(e): void => setSearchInput(e.target.value)}
                onClick={(): void => setSearch(true)}
              />
              <GrFormClose
                onClick={(): void => {
                  setSearch(false);
                  setSearchInput("");
                }}
              />
            </div>
          </div>
          <SearchModal search={search} setSearch={setSearch} data={data} />
        </div>

        <div className="basis-1/6 flex items-center gap-2 mx-2 justify-end font-light text-sm ">
          {localToken.length > 1 ? (
            <div className="flex items-center gap-3 ">
              <div className="w-[50px] h-[50px]">
                <Image
                  src={userSign.img[0] ? userSign.img[0] : cat}
                  alt="profile"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
              </div>
              <div className="mr-10">
                <p
                  className="hover:text-[#9395d3] cursor-pointer uppercase w-[90px] truncate"
                  onClick={(): any => route.push("/userprofile")}>
                  {localStorage.getItem("name")}
                </p>
                <p
                  className="cursor-pointer hover:text-[#9395d3]"
                  onClick={handleLogout}>
                  LOG OUT
                </p>
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
                  onClick={(): void => {
                    setSignIn(!signIn);
                  }}>
                  sign in
                </p>
                <Link href={"/register"}>
                  <p className="hover:text-[#9395d3]">create account</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex px-4 justify-between items-center  md:hidden">
        <div className="flex gap-2">
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
