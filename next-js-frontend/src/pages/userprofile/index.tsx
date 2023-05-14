import React, { useEffect, useState } from "react";
import Footer from "@/components/HeaderNavFooter/Footer";
import { NavSearch } from "@/components/HeaderNavFooter/NavSearch";
import { NavbarCustom } from "@/components/HeaderNavFooter/NavbarCustom";
import axios from "axios";
import Image from "next/image";
import { MyComments } from "@/components/commentsRates/MyComments";
import { Profile } from "@/components/Profile";
import { MdTableRows } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { IUser } from "@/components/InterfaceEnumsMeta/InterFace";

export default function Userprofile() {
  const id = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const init: IUser = {
    name: "",
    email: "",
    userName: "",
    phone: 0,
    password: "",
    point: [0],
    userType: "",
    img: [],
    createdAt: "",
    token: token,
  };
  const [data, setData] = useState(init);
  const [constData, setConstData] = useState(init);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const id = typeof window !== "undefined" ? localStorage.getItem("id") : "";
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : "";

    if (id && token) {
      axios
        .post(`http://localhost:8080/api/user?id=${id}`, {
          token: token,
        })
        .then((res) => {
          setData({ ...res.data.result, token: token });
          setConstData({ ...res.data.result, token: token });
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="bg-black text-white">
      <NavbarCustom />
      <NavSearch />
      <div className="h-full flex  justify-center ">
        <div className="w-[700px]">
          <div className="flex items-center py-5">
            <div className="basis-1/3">
              <Image
                // src={cat}
                src={data.img[0]}
                alt="img"
                width={120}
                height={120}
                className="rounded-full w-[150px] h-[150px] outline outline-white/50 outline-offset-4 object-cover"
              />
            </div>
            <div className="basis-2/3 flex flex-col gap-2">
              <div className="flex items-center gap-5">
                <p className="text-xl">{data?.userName}</p>
              </div>
              <div className="flex items-center gap-5">
                <p>{data.point} points</p>
                <p>{data.name}</p>
              </div>
              <div>
                <p>{data.email}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/50 my-5 ">
            <div className="flex gap-10 justify-center my-5">
              <p
                className={
                  active == 1
                    ? "flex items-center gap-2"
                    : "flex items-center gap-2 text-white/50"
                }
                onClick={() => setActive(1)}>
                {" "}
                <MdTableRows />
                Profile
              </p>
              <p
                className={
                  active == 2
                    ? "flex items-center gap-2"
                    : "flex items-center gap-2 text-white/50"
                }
                onClick={() => setActive(2)}>
                {" "}
                <FaRegComment />
                My Comments
              </p>
            </div>
            {active == 1 ? (
              <Profile
                data={data}
                constData={constData}
                setData={setData}
                setConstData={setConstData}
              />
            ) : (
              <MyComments />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
