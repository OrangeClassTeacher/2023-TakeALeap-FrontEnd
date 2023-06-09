import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/HeaderNavFooter/Header";
import Footer from "@/components/HeaderNavFooter/Footer";
import Image from "next/image";
import { IDetailFood } from "@/components/InterfaceEnumsMeta/InterFace";
import CommentFood from "@/components/commentsRates/CommentFood";
import Utils from "@/utils/helper";
import Link from "next/link";
import { IoMdRestaurant } from "react-icons/io";
import { TbSoup } from "react-icons/tb";
import gip from "../../img/gip.gif";
import { Loading } from "@/components/Loading";
import { LoadingContext } from "@/utils/ContextConfig";
import { toast } from "react-toastify";

export default function Food(): JSX.Element {
  const route = useRouter();
  const { id } = route.query;
  const [food, setFood] = useState<IDetailFood>();
  const { loading, setLoading }: any = useContext(LoadingContext);

  useEffect((): void => {
    if (id?.length) {
      setLoading(true);
      axios
        .get(`${Utils.API_URL}/food?id=${id}`)
        .then((res) => {
          if (!res.data.status) {
            toast.error("Please try again!", {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            setFood(res.data.result);
          }
        })
        .catch(() =>
          toast.error("Please try again", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        )
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      {food && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-black ">
            <div className="text-white blk glow">
              <div className="h-[100%] relative">
                <Image
                  src={gip}
                  width={1200}
                  height={100}
                  alt="img"
                  className="giphy h-[100%]"
                />
                <div className="flex justify-center items-center absolute top-0 w-[100%] h-[100%]">
                  <div>
                    <h1 className="text-2xl md:text-4xl uppercase justify-center flex">
                      {food.foodName}
                    </h1>
                    <div className="flex gap-2 items-center justify-around mt-10">
                      <p className="flex justify-center">{food.price}₮</p>
                      <p>/</p>
                      <h1 className="justify-center text-xl md:text-2xl gap-2 flex items-center hover:text-[#9395d3]">
                        <IoMdRestaurant />
                        <Link href={`/restaurant?id=${food.restaurantId._id}`}>
                          <p className="uppercase ">
                            {" "}
                            {food.restaurantId.restaurantName}
                          </p>
                        </Link>
                      </h1>
                      <p>/</p>
                      <div className="flex justify-center gap-2">
                        <p className="text-xl">
                          <TbSoup />
                        </p>
                        {food.foodType}
                      </div>
                    </div>
                    <p className="flex justify-center">{food.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={food.img[0] || ""}
                width={1000}
                height={1000}
                alt="img"
                className=""
              />
            </div>
          </div>
          <div className="bg-black">
            <CommentFood />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
