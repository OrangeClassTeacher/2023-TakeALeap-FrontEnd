import React, { useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { GrClose } from "react-icons/Gr";
import Image from "next/image";
import cat from "../img/logo.jpg";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignIn({
  signIn,
  setSignIn,
}: {
  signIn: boolean;
  setSignIn: Dispatch<SetStateAction<boolean>>;
}) {
  const route = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  interface Iuser {
    name: string;
    userName: string;
    email: string;
    phone: number;
    password: string;
    point: number[];
    userType: string;
    img: string[];
  }

  const tokensave = (data: {
    status: boolean;
    data: Iuser;
    message: string;
    token: string;
  }) => {
    const token = data.token;
    route.push("/");
  };

  const signin = () => {
    axios
      .post("", { email: email, password: password })
      .then((res) => {
        res.data.status
          ? tokensave(res.data)
          : alert("email or password is wrong");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="h-screen w-screen fixed inset-0 overflow-y-auto flex items-center justify-center bg-gray-400/50"
      onClick={() => setSignIn(!signIn)}>
      <div
        className="w-[400px] h-[500px] p-4 text-center bg-white rounded text-black p-8"
        onClick={(e) => e.stopPropagation()}>
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
              value={email}
              placeholder="E-Mail"
              style={{ outline: "none", width: "100%" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="rounded border p-3 mb-6">
            <input
              type="text"
              value={password}
              placeholder="Password"
              style={{ outline: "none", width: "100%" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="bg-black text-white p-3" onClick={() => signin()}>
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
