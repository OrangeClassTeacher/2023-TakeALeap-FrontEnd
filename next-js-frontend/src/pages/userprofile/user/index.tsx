import React, { useEffect, useState } from "react";
import { NavSearch } from "@/components/NavSearch";
import Footer from "@/pages/food";
import axios from "axios";
import Image from "next/image";

export default function Index() {
  const id = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const init = {
    name: "",
    email: "",
    userName: "",
    phone: "",
    password: "",
    point: "",
    userType: "",
    img: [],
    createdAt: "",
    token: token,
  };
  const [data, setData] = useState(init);
  const [dataConst, setDataConst] = useState(init);

  useEffect(() => {
    if (id && token) {
      axios
        .post(`http://localhost:8080/api/user?id=${id}`, {
          token: token,
        })
        .then((res) => {
          setData(res.data.result);
          setDataConst(res.data.result);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="bg-black text-white">
      <NavSearch />
      <div className="h-full">
        <div className="flex">
          <div className="basis-1/3">
            <Image src={dataConst.img[0]} alt="img" />
          </div>
          <div className="basis-2/3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
