import React, { useState, useContext, useEffect, useCallback } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import cat from "../img/logo.jpg";
import Link from "next/link";
import axios from "axios";
import { UserContext } from "@/utils/ContextConfig";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import Utils from "@/utils/helper";
import { Loading } from "./Loading";
import { LoadingContext } from "@/utils/ContextConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [login, setLogin] = useState(init);
  const { setUserSign }: any = useContext(UserContext);
  const [passwordType, setPasswordType] = useState("password");

  const signin = useCallback((): void => {
    // setLoading(true);
    axios
      .post(`${Utils.API_URL}/login`, login)
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("name", res.data.data.userName);
          localStorage.setItem("id", res.data.data._id);
          localStorage.setItem("token", res.data.token);
          setUserSign(res.data.data);
          setSignIn(!signIn);
          toast.success("🦄 Login Successful", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error("Check your email or password!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      })
      .catch((err) => console.log("", err));
  }, [login, setUserSign, setSignIn, signIn]);

  const togglePassword = (e: any): void => {
    e.preventDefault();

    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        signin();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [signin]);
  return (
    <div
      className="h-screen w-screen fixed inset-0 overflow-y-auto flex items-center justify-center bg-gray-400/50 z-50"
      onClick={(): void => setSignIn(!signIn)}
      style={{ display: signIn ? "flex" : "none" }}
    >
      <div
        className="w-[400px] h-[500px] p-4 text-center bg-white rounded text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex justify-end">
            {" "}
            <GrClose onClick={(): void => setSignIn(!signIn)} />
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
          <div className="rounded border p-3 mb-6 flex">
            <input
              type="text"
              value={login.email}
              placeholder="E-Mail"
              style={{ outline: "none", width: "100%" }}
              onChange={(e): void =>
                setLogin({ ...login, email: e.target.value })
              }
            />
          </div>
          <div className="rounded border p-3 mb-6 flex">
            <input
              type={passwordType}
              value={login.password}
              placeholder="Password"
              style={{ outline: "none", width: "100%" }}
              onChange={(e): void =>
                setLogin({ ...login, password: e.target.value })
              }
            />
            <button onClick={togglePassword}>
              {passwordType === "password" ? (
                <AiFillEyeInvisible />
              ) : (
                <AiFillEye />
              )}
            </button>
          </div>
          <div
            className="bg-black text-white p-3 cursor-pointer"
            onClick={signin}
          >
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
