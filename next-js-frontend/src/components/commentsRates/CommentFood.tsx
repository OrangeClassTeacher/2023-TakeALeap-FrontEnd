import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useRouter } from "next/router";
import axios from "axios";
import { IComment } from "../InterfaceEnumsMeta/InterFace";
import SignIn from "../SignIn";
import Utils from "@/utils/helper";
import { RateStar } from "./RateStar";
import { ShowComment } from "./ShowComment";

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
  const [all, setAll] = useState<IComment[]>([]);
  const [showAllCom, setShowAllCom] = useState<boolean>(false);
  const [signIn, SetSignIn] = useState<boolean>(false);
  const [rate, setRate] = useState<number>(0);

  const getData = () => {
    axios
      .get(`${Utils.API_URL}/commentbyfoodid?id=${id}`)
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
      .post(`${Utils.API_URL}/comment`, commentSend)
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
      {all && (
        <>
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
                <ShowComment showAllCom={showAllCom} all={all} />
              </div>
            </div>

            <div>
              <h1 className="text-3xl m-4">Write a review</h1>
              <div className="m-4">
                <RateStar rate={rate} rateHandle={rateHandle} />
                <div className="flex items-center gap-2 ms-5">
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
        </>
      )}
    </div>
  );
}
