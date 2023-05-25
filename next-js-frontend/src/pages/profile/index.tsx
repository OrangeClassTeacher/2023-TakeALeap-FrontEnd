import React, { useEffect, useState } from "react";
import Footer from "@/components/HeaderNavFooter/Footer";
import { NavSearch } from "@/components/HeaderNavFooter/NavSearch";
import { NavCateg } from "@/components/HeaderNavFooter/NavCateg";
import axios from "axios";
import Image from "next/image";
import { ShowComment } from "@/components/commentsRates/ShowComment";
import { FaRegComment } from "react-icons/fa";
import { IUser, IComment } from "@/components/InterfaceEnumsMeta/InterFace";
import Utils from "@/utils/helper";
import { useContext } from "react";
import { LoadingContext } from "@/utils/ContextConfig";
import { Loading } from "@/components/Loading";
import Cat from "../../img/cat.jpeg";
import { useRouter } from "next/router";
import { ToastOptions, toast } from "react-toastify";

export default function Profile(): JSX.Element {
  const route = useRouter();
  const { id } = route.query;
  const [data, setData] = useState<IUser>();
  const [comment, setComment] = useState<IComment[]>([]);
  const [showAllCom] = useState<boolean>(true);
  const { loading, setLoading }: any = useContext(LoadingContext);
  const toastStyle: ToastOptions<any> = {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  useEffect((): void => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : "";

    if (id && token) {
      setLoading(true);
      axios
        .post(`${Utils.API_URL}/getbyuserid?id=${id}`, {
          token: token,
        })
        .then((res) => {
          if (!res.data.status) {
            toast.error("Please try again!", toastStyle);
          } else {
            setData(res.data.result);
          }
        })
        .catch(() => toast.error("Please try again", toastStyle));

      axios
        .get(`${Utils.API_URL}/commentbyuserid?id=${id}`)
        .then((res) => {
          if (!res.data.status) {
            toast.error("Please try again!", toastStyle);
          } else {
            setComment(res.data.result);
          }
        })
        .catch(() => toast.error("Please try again", toastStyle))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-black text-white">
      <NavSearch />
      <NavCateg />
      <div className="h-full flex  justify-center ">
        {!loading && data && (
          <div className="w-[700px]">
            <div className="flex items-center py-5">
              <div className="basis-1/3">
                <Image
                  src={data.img[0] ? data.img[0] : Cat}
                  alt="img"
                  width={120}
                  height={120}
                  className="rounded-full w-[150px] h-[150px] outline outline-white/50 outline-offset-4 object-cover"
                />
              </div>
              <div className="basis-2/3 flex flex-col gap-2">
                <div className="flex items-center gap-5">
                  <p className="text-xl">{data.userName}</p>
                </div>
                <div className="flex items-center gap-5">
                  <p>{data.point} points</p>
                  <p>{data.name}</p>
                </div>
                <div>
                  <p>{data.email}</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/50 my-5 ">
              <div className="flex gap-10 justify-center my-5">
                <p className="flex items-center gap-2 cursor-pointer">
                  <FaRegComment />
                  Comments
                </p>
              </div>
              <div>
                {comment.length ? (
                  <ShowComment all={comment} showAllCom={showAllCom} />
                ) : (
                  <div>No Comment</div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
