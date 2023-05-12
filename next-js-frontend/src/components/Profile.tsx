import React, { useState } from "react";
import { IUser } from "./InterFace";
import Image from "next/image";
import axios from "axios";
import { ImgChangeModal } from "./ImgChangeModal";
import Loading from "./Loading";

export const Profile = ({
  data,
  constData,
  setData,
  setConstData,
}: {
  data: IUser;
  constData: IUser;
  setData: any;
  setConstData: any;
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [laoding, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const id = typeof window !== "undefined" ? localStorage.getItem("id") : "";
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const editUser = async () => {
    await axios
      .put(`http://localhost:8080/api/user?id=${id}`, data)
      .then((res) => (res.data.status ? alert("amjilttai") : alert("aldaatai")))
      .catch((err) => console.log(err));

    localStorage.setItem("name", data.userName);

    axios
      .post(`http://localhost:8080/api/user?id=${id}`, {
        token: token,
      })
      .then((res) => {
        setConstData(res.data.result);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    setIsEdit(false);
  };
  return (
    <div className="flex flex-col gap-8">
      <ImgChangeModal
        modal={modal}
        setModal={setModal}
        loading={laoding}
        setLoading={setLoading}
      />
      <div className="flex gap-5 items-center">
        <div className="basis-1/6 flex justify-end">
          <Image
            src={data.img[0]}
            width={50}
            height={50}
            alt="img"
            className="rounded-full w-[60px] h-[60px]"
          />
        </div>
        <p
          className="basis-4/6 text-blue-500/50 hover:text-blue-500"
          onClick={() => setModal(true)}
        >
          Change profile photo
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="basis-1/6 flex justify-end font-semibold">Name</div>
        <p className="basis-4/6">
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            disabled={!isEdit}
            className={
              isEdit
                ? "border border-gray-400 p-1 bg-black rounded w-full outline-0"
                : "border border-gray-400 p-1 bg-black rounded w-full text-white/50"
            }
          />
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="basis-1/6 flex justify-end font-semibold">
          User Name
        </div>
        <p className="basis-4/6">
          <input
            id="userName"
            type="text"
            value={data.userName}
            onChange={(e) => setData({ ...data, userName: e.target.value })}
            disabled={!isEdit}
            className={
              isEdit
                ? "border border-gray-400 p-1 bg-black rounded w-full  outline-0"
                : "border border-gray-400 p-1 bg-black rounded w-full text-white/50"
            }
          />
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="basis-1/6 flex justify-end font-semibold">Email</div>
        <p className="basis-4/6">
          <input
            id="email"
            type="text"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            disabled={!isEdit}
            className={
              isEdit
                ? "border border-gray-400 p-1 bg-black rounded w-full  outline-0"
                : "border border-gray-400 p-1 bg-black rounded w-full text-white/50"
            }
          />
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="basis-1/6 flex justify-end font-semibold">Phone</div>
        <p className="basis-4/6">
          <input
            id="phone"
            type="text"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            disabled={!isEdit}
            className={
              isEdit
                ? "border border-gray-400 p-1 bg-black rounded w-full  outline-0"
                : "border border-gray-400 p-1 bg-black rounded w-full text-white/50"
            }
          />
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="basis-1/6 flex justify-end font-semibold">Password</div>
        <p className="basis-4/6">
          <input
            id="password"
            type="password"
            value={data.password}
            // onChange={(e) => setData({ ...data, password: e.target.value })}
            disabled={true}
            className={
              isEdit
                ? "border border-gray-400 p-1 bg-black rounded w-full  outline-0"
                : "border border-gray-400 p-1 bg-black rounded w-full text-white/50"
            }
          />
        </p>
      </div>
      <div className="flex justify-end mx-10">
        {isEdit ? (
          <div className="flex gap-10">
            <button
              onClick={() => {
                setData(constData);
                setIsEdit(false);
              }}
              className="sda hover:bg-gray-700 hover:border-gray-700 hover:text-gray-500 py-2 px-4 rounded"
            >
              <div className="yma">
                <span className="spam text-sm text-red-300">Cancel</span>
              </div>
            </button>
            <button
              onClick={() => editUser()}
              className="sda hover:bg-gray-700 hover:border-gray-700 hover:text-gray-500 py-2 px-4 rounded"
            >
              <div className="yma">
                <span className="spam text-sm text-green-300">Save</span>
              </div>
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEdit(!isEdit)}
            className="mf hover:bg-gray-700 hover:border-gray-700 hover:text-gray-500 py-2 px-4 rounded"
          >
            <div className="yma">
              <span className="spam">E</span>
              <span className="spam">dit</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
