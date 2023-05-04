import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineSend } from "react-icons/ai";
import img from "../img/cat.jpeg";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useRouter } from "next/router";
import axios from "axios";
import { Icomment } from "./InterFace";
import Starts from "./Starts";
import SignIn from "./SignIn";
import { FaStar } from "react-icons/fa";

export default function CommentFood() {
  const route = useRouter();
  const { id } = route.query;
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("id") : "";

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const init = {
    restaurantId: null,
    foodId: id,
    userId: userId,
    comment: "",
    rate: 0,
    token: token,
  };

  const [commentSend, setComment] = useState(init);
  const [all, setAll] = useState<Icomment[]>([]);
  const [showAllCom, setShowAllCom] = useState<boolean>(false);
  const [signIn, SetSignIn] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(0);

  const getData = () => {
    axios
      .get(`http://localhost:8080/api/commentbyfoodid?id=${id}`)
      .then((res) => {
        setAll(res.data.result);
        setComment({
          ...commentSend,
          restaurantId: res.data.result[0].restaurantId,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (route.isReady) {
      getData();
    }
  }, []);

  const checkLogin = () => {
    const login = localStorage.getItem("id");
    if (!login) {
      SetSignIn(true);
    }
  };

  const sendComment = () => {
    axios
      .post("http://localhost:8080/api/comment", commentSend)
      .then((res) => (res.data.status ? getData() : ""))
      .catch((err) => console.log(err));

    setRate(0);
    setComment(init);
  };

  const rateHandle = (rate: number) => {
    setRate(rate);
    setComment({ ...commentSend, rate: rate });
  };

  return (
    <div className="border-t md:px-20 py-10 text-white">
      <SignIn signIn={signIn} setSignIn={SetSignIn} />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div>
            <div className="flex items-center gap-2 m-4 hover:text-sky-500 cursor-pointer">
              {" "}
              <h1
                onClick={() => setShowAllCom(!showAllCom)}
                className="text-3xl ">
                All comments
              </h1>
              <div className="">
                {showAllCom ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            </div>
            <div className={showAllCom ? "h-[500px] overflow-scroll" : ""}>
              {all?.length > 0 ? (
                all?.map((item, ind) => {
                  if (showAllCom) {
                    return (
                      <div
                        key={ind}
                        className="flex p-4  m-4 items-center border-b border-slate-500 ">
                        <div className="basis-1/12 mx-3">
                          <Image
                            src={img}
                            alt="img"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </div>
                        <div className="basis-11/12">
                          <div className="flex justify-between  items-center">
                            <div className="flex items-center">
                              <p className="font-semibold">
                                {item.userId.userName}
                              </p>
                              <span className="font-thin text-sm mx-2">
                                {item.createdAt.slice(0, 10)}
                              </span>
                            </div>
                            <div className="text-center">
                              <p className="text-end mx-1">
                                <Starts stars={item.rate ? item.rate : 0} />
                              </p>
                            </div>
                          </div>
                          <span className="font-light my-1">
                            {item.comment}
                          </span>
                          {/* <div className="flex items-center">
                          <p className="font-semibold">Rate : </p>
                          <p className="text-end mx-1">
                            <Starts stars={item.rate ? item.rate : 0} />
                          </p>
                        </div> */}
                        </div>
                      </div>
                    );
                  } else {
                    if (ind < 3) {
                      return (
                        <div
                          key={ind}
                          className="flex p-4 m-4 items-center border-b border-slate-500">
                          <div className="mx-3 basis-1/12">
                            <Image
                              src={img}
                              alt="img"
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                          <div className="basis-11/12">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <p className="font-semibold">
                                  {item.userId.userName}
                                </p>
                                <span className="font-thin text-sm mx-2">
                                  {item.createdAt.slice(0, 10)}
                                </span>
                              </div>
                              <div className="text-center">
                                <p className="text-end mx-1">
                                  <Starts stars={item.rate ? item.rate : 0} />
                                </p>
                              </div>
                            </div>
                            <span className="font-light my-1">
                              {item.comment}
                            </span>
                          </div>
                        </div>
                      );
                    }
                  }
                })
              ) : (
                <div>No comment yet</div>
              )}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl m-4">Write a review</h1>
          <div className="m-4">
            <div className="flex text-4xl m-5">
              <FaStar
                className={rate > 0 ? "text-yellow-400" : ""}
                onClick={() => rateHandle(1)}
              />
              <FaStar
                className={rate > 1 ? "text-yellow-400" : ""}
                onClick={() => rateHandle(2)}
              />
              <FaStar
                className={rate > 2 ? "text-yellow-400" : ""}
                onClick={() => rateHandle(3)}
              />
              <FaStar
                className={rate > 3 ? "text-yellow-400" : ""}
                onClick={() => rateHandle(4)}
              />
              <FaStar
                className={rate > 4 ? "text-yellow-400" : ""}
                onClick={() => rateHandle(5)}
              />
            </div>
            <div className="flex items-center gap-2 ms-5">
              {/* <Image
                src={img}
                alt="profile"
                width={50}
                height={50}
                className="rounded-full"
              /> */}
              <div
                className="flex w-2/3 rounded bg-gray-700 p-1 h-[200px] items-center "
                onClick={() => checkLogin()}>
                <input
                  type="text"
                  value={commentSend.comment}
                  placeholder="Review..."
                  onChange={(e) =>
                    setComment({ ...commentSend, comment: e.target.value })
                  }
                  className=" bg-gray-700 outline-none  w-full px-3 h-[190px]"
                />
                <div className="m-2 hover:text-sky-500">
                  <AiOutlineSend />
                </div>
              </div>
              <div
                onClick={() => sendComment()}
                className="bg-gray-700 rounded p-5 text-white/50 hover:text-white">
                Submit review
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
