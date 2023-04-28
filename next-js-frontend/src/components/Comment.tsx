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

export default function Comment() {
  const [comment, setComment] = useState();
  const [all, setAll] = useState<Icomment[]>([]);
  const [showAllCom, setShowAllCom] = useState<Boolean>(false);

  const route = useRouter();
  const { id } = route.query;

  useEffect(() => {
    if (route.isReady) {
      axios
        .get(`http://localhost:8080/api/byrestaurantid?id=${id}`)
        .then((res) => {
          setAll(res.data.result);
          console.log(res.data.result);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="border-t md:mx-20 ">
      <div className="grid md:grid-cols-2">
        <div>
          <div>
            <div
              className="flex items-center gap-2 m-4 hover:text-sky-500 cursor-pointer"
              onClick={() => setShowAllCom(!showAllCom)}>
              {" "}
              <h1>All comments</h1>
              <div className="hover:text-">
                {showAllCom ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            </div>
            <div>
              {all?.map((item, ind) => {
                if (showAllCom) {
                  return (
                    <div key={ind} className="flex  p-4 items-center">
                      <div className=" mx-3">
                        <Image
                          src={img}
                          alt="img"
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <div className="flex items-center">
                          <p className="font-semibold">
                            {item.userId.userName} :
                          </p>
                          <p className="font-light mx-1"> {item.comment}</p>
                        </div>
                        <div className="flex items-center">
                          <p className="font-semibold">Rate : </p>
                          <p className="text-end mx-1">
                            <Starts stars={item.rate ? item.rate : 0} />
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  if (ind < 3) {
                    return (
                      <div key={ind} className="flex  p-4 items-center">
                        <div className=" mx-3">
                          <Image
                            src={img}
                            alt="img"
                            width={30}
                            height={30}
                            className="rounded-full"
                          />
                        </div>
                        <div className="">
                          <div className="flex items-center">
                            <p className="font-semibold">
                              {item.userId.userName} :
                            </p>
                            <p className="font-light mx-1"> {item.comment}</p>
                          </div>
                          <div className="flex items-center">
                            <p className="font-semibold">Rate : </p>
                            <p className="text-end mx-1">
                              <Starts stars={item.rate} />
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl m-4">Restaurant Comments</h1>
          <div className="flex justify-center items-center gap-2">
            <Image
              src={img}
              alt="profile"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex w-1/2 rounded-full bg-gray-700 p-1 h-[50px] items-center">
              <input
                type="text"
                value={comment}
                className=" bg-gray-700 outline-none rounded-full w-full px-3"
              />
              <div className="m-2">
                <AiOutlineSend />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
