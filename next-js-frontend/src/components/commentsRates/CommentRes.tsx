import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { useRouter } from "next/router";
import axios from "axios";
import { IComment } from "../InterfaceEnumsMeta/InterFace";
import SignIn from "../SignIn";
import { RateStar } from "./RateStar";
import { ShowComment } from "./ShowComment";
import Utils from "@/utils/helper";

const CommentRes = (): JSX.Element => {
  const route = useRouter();
  const { id } = route.query;
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("id") : "";

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const init = {
    restaurantId: id,
    foodId: null,
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

  const getData = (): void => {
    axios
      .get(`${Utils.API_URL}/byrestaurantid?id=${id}`)
      .then((res) => {
        setAll(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  useEffect((): void => {
    if (route.isReady) {
      getData();
    }
  }, []);

  const checkLogin = (): void => {
    const login = localStorage.getItem("id");
    if (!login) {
      SetSignIn(true);
    }
  };

  const sendComment = (): void => {
    axios
      .post(`${Utils.API_URL}/comment`, commentSend)
      .then((res) => (res.data.status ? getData() : ""))
      .catch((err) => console.log(err));
    setComment(init);
    setRate(0);
  };

  const rateHandle = (rate: number): void => {
    setRate(rate);
    setComment({ ...commentSend, rate: rate });
  };

  return (
    <div className="border-t mt-5">
      <SignIn signIn={signIn} setSignIn={SetSignIn} />
      <div className="grid grid-cols-1 md:grid-cols-2 m-5">
        <div>
          <div>
            <div className="flex items-center gap-2  hover:text-sky-500 cursor-pointer">
              <h1
                onClick={(): void => setShowAllCom(!showAllCom)}
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
                onClick={(): void => checkLogin()}>
                <input
                  type="text"
                  value={commentSend.comment}
                  placeholder="Review..."
                  onChange={(e): void =>
                    setComment({ ...commentSend, comment: e.target.value })
                  }
                  className=" bg-gray-700 outline-none  w-full px-3 h-[190px]"
                />
                <div className="m-2 hover:text-sky-500">
                  <AiOutlineSend />
                </div>
              </div>
              <div
                onClick={(): void => sendComment()}
                className="bg-gray-700 rounded p-5 text-white/50 hover:text-white">
                Submit review
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentRes;
