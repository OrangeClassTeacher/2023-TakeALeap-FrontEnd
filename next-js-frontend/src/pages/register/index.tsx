import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import axios from "axios";
import { BiLoader } from "react-icons/bi";

export default function Register() {
  const init = {
    name: "",
    userName: "",
    email: "",
    phone: 0,
    password: "",
    point: [0],
    userType: "User",
    img: [],
  };

  const [addUser, setAddUser] = useState(init);
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const register = () => {
    console.log(addUser);

    addUser.userName.length < 2 && addUser.name.length < 2
      ? alert("User Name and Name must be longer than 2 character")
      : !addUser.email.includes("@gmail.com")
      ? alert("Please fill correct email")
      : addUser.password.length <= 8
      ? alert("password must be longer than 8 character")
      : addUser.phone <= 9999999
      ? alert("please fill corrent phone number")
      : send();
  };

  const send = () => {
    setLoading(true);
    axios
      .post("http://localhost:8080/api/register", addUser)
      .then((res) => {
        setLoading(false);
        if (!res.data.status) {
          if (res.data.message == "Email and Phone  duplicated") {
            alert("Email and Phone number are already registered");
          } else if (res.data.message == "Hadgalahad aldaa garlaa") {
            alert("Something went wrong, Please try again");
            setAddUser(init);
            setConfirm("");
          }
        } else {
          setAddUser(init);
          setConfirm("");
          alert("Register succeed, Please sign in ");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-center pt-20 relative">
      <Link href={"/"}>
        <div className="flex items-center ml-10 hover:text-sky-500">
          {" "}
          <BiArrowBack /> back
        </div>
      </Link>

      <div className="my-10 text-2xl">
        <h1 className="text-sm md:text-xl lg:text-2xl">
          CREATE YOUR ACCOUNT FOR FREE
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 mx-10 md:mx-5 lg:mx-0 my-5 lg:my-8">
          <div>
            <div className="flex justify-end">
              <h1 className="w-full md:w-2/3 lg:w-1/2  px-2 text-start">
                Name
              </h1>
            </div>
            <div className="flex justify-end">
              <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
                <input
                  value={addUser.name}
                  className="w-full outline-0"
                  placeholder="Name"
                  onChange={(e) =>
                    setAddUser({ ...addUser, name: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
              <h1 className="w-full md:w-2/3 lg:w-1/2  px-2 text-start">
                User Name
              </h1>
            </div>
            <div className="flex justify-start">
              <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
                <input
                  className="w-full outline-0"
                  placeholder="User Name"
                  value={addUser.userName}
                  onChange={(e) =>
                    setAddUser({ ...addUser, userName: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 mx-10 md:mx-5 lg:mx-0 my-5 lg:my-8">
          <div>
            <div className="flex justify-end">
              <h1 className="w-full md:w-2/3 lg:w-1/2  px-2 text-start">
                E-Mail
              </h1>
            </div>
            <div>
              <div className="flex justify-end">
                <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
                  <input
                    className="w-full outline-0"
                    placeholder="E-Mail"
                    value={addUser.email}
                    onChange={(e) =>
                      setAddUser({ ...addUser, email: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
              <h1 className="w-full md:w-2/3 lg:w-1/2  px-2 text-start">
                Phone
              </h1>
            </div>
            <div className="flex justify-start">
              <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
                <input
                  className="w-full outline-0"
                  type="number"
                  placeholder="Phone"
                  min={1}
                  value={addUser.phone}
                  onChange={(e) =>
                    setAddUser({ ...addUser, phone: Number(e.target.value) })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 mx-10 md:mx-5 lg:mx-0 ">
          <div>
            <div className="flex justify-end">
              <h1 className="w-full md:w-2/3 lg:w-1/2  px-2 text-start">
                Password
              </h1>
            </div>
            <div className="flex justify-end">
              <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
                <input
                  type="password"
                  className="w-full outline-0"
                  placeholder="Password"
                  value={addUser.password}
                  onChange={(e) =>
                    setAddUser({ ...addUser, password: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-start">
              <h1 className="w-full md:w-2/3 lg:w-1/2  px-2 text-start">
                Confirm password
              </h1>
            </div>
            <div className="flex justify-start">
              <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
                <input
                  type="password"
                  value={confirm}
                  className="w-full outline-0"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-5 lg:mb-8 ml-11">
          <div className="w-full md:w-1/2 text-start">
            <p
              style={{ color: addUser.password === confirm ? "green" : "red" }}>
              Confirm
            </p>
            <p
              style={{ color: addUser.password.length >= 8 ? "green" : "red" }}>
              Must be 8 or more characters
            </p>
          </div>
        </div>
      </div>
      <div>
        <button
          className="text-xs md:text-base lg:text-lg bg-black text-white font-thin p-3 hover:bg-black/75"
          onClick={() => {
            if (addUser.password === confirm) {
              register();
            } else {
              alert("Confirm password");
            }
          }}>
          CREATE AN ACCOUNT
        </button>
      </div>
      <div className="flex justify-around my-5 lg:my-8">
        <div></div>
        <div className="text-xs md:text-sm lg:text-base font-thin text-slate-400">
          OR LOGIN WITH
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 mx-10 md:mx-5 lg:mx-0 my-5 lg:my-8">
        <div className="flex justify-around md:justify-end">
          <div className="border rounded-full w-[200px] md:w-[170px] lg:w-[170px] p-2 flex items-baseline justify-center">
            <FaFacebookF />
            <p className="pl-1">FACEBOOK</p>
          </div>
        </div>
        <div className="flex justify-around md:justify-start">
          <div className="border rounded-full w-[200px] md:w-[170px] lg:w-[170px] p-2 flex items-baseline justify-center">
            <FaGoogle />
            <p className="pl-1">GOOGLE</p>
          </div>
        </div>
      </div>

      <div
        className={
          loading
            ? "absolute w-full h-screen bg-black/50 flex justify-center top-0 items-center"
            : "hidden"
        }>
        <div className="border bg-white rounded w-[220px] h-[40px] flex justify-around items-center">
          <div className="  flex justify-around items-center gap-1">
            {" "}
            <BiLoader />
            Registering
          </div>
        </div>
      </div>
    </div>
  );
}
