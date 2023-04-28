import React, { useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { GrClose } from "react-icons/Gr";
import Image from "next/image";
import cat from "../img/logo.jpg";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { Iuser } from "./InterFace";

export default function SignIn({
  signIn,
  setSignIn,
}: {
  signIn: boolean;
  setSignIn: Dispatch<SetStateAction<boolean>>;
}) {
  const init = {
    email: "",
    password: "",
  };

  const route = useRouter();
  const [login, setLogin] = useState(init);

  const signin = () => {
    axios
      .post("http://localhost:8080/api/login", login)
      .then((res) => {
        // route.push("/");
        if (res.data.status) {
          localStorage.setItem("name", res.data.data.name);
          localStorage.setItem("id", res.data.data._id);
          localStorage.setItem("token", res.data.token);
          setSignIn(!signIn);
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log("", err));
  };

  return (
    <div
      className="h-screen w-screen fixed inset-0 overflow-y-auto flex items-center justify-center bg-gray-400/50"
      onClick={() => setSignIn(!signIn)}
    >
      <div
        className="w-[400px] h-[500px] p-4 text-center bg-white rounded text-black p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex justify-end">
            {" "}
            <GrClose onClick={() => setSignIn(!signIn)} />
          </div>
          <div className="flex justify-around">
            <Image
              alt="logo"
              src={cat}
              width={80}
              height={80}
              className="rounded-full w-[80px] h-[80px] object-cover"
            />
          </div>
          <div className="flex justify-around">
            <h1 className="text-3xl font-light py-3">Sign In</h1>
          </div>
          <div className="rounded border p-3 mb-6">
            <input
              type="text"
              value={login.email}
              placeholder="E-Mail"
              style={{ outline: "none", width: "100%" }}
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />
          </div>
          <div className="rounded border p-3 mb-6">
            <input
              type="text"
              value={login.password}
              placeholder="Password"
              style={{ outline: "none", width: "100%" }}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
          </div>
          <div className="bg-black text-white p-3" onClick={signin}>
            Sign In
          </div>
          <div className="flex gap-2 pt-5">
            <p>Do not have an account?</p>{" "}
            <Link href="/register" className="text-sky-500">
              <p> Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
