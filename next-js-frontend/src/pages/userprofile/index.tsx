import React, { useEffect, useState } from "react";
import Footer from "@/components/HeaderNavFooter/Footer";
import { NavSearch } from "@/components/HeaderNavFooter/NavSearch";
import axios from "axios";
import Image from "next/image";
import { MyComments } from "@/components/commentsRates/MyComments";
import { Profile } from "@/components/Profile";
import { MdTableRows } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { IUser } from "@/components/InterfaceEnumsMeta/InterFace";
import Utils from "@/utils/helper";
import { useContext } from "react";
import { LoadingContext } from "@/utils/ContextConfig";
import { Loading } from "@/components/Loading";
import Cat from "../../img/cat.jpeg";
import { UserContext } from "@/utils/ContextConfig";
import { NavCateg } from "@/components/HeaderNavFooter/NavCateg";
import { toast, ToastOptions } from "react-toastify";

export default function Userprofile(): JSX.Element {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const init: IUser = {
    name: "",
    email: "",
    userName: "",
    phone: 0,
    password: "",
    point: [0],
    userType: "",
    img: [],
    createdAt: "",
    token: token,
  };
  const [data, setData] = useState(init);
  const [active, setActive] = useState(1);
  const [comment, setComment] = useState();
  const { loading, setLoading }: any = useContext(LoadingContext);
  const { setUserSign }: any = useContext(UserContext);

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
    const id = typeof window !== "undefined" ? localStorage.getItem("id") : "";
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
            setData({ ...res.data.result, token: token });
            setUserSign({ ...res.data.result, token: token });
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
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="bg-black text-white">
      <NavSearch />
      <NavCateg />
      <div className="h-full flex  justify-center ">
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
              <p
                className={
                  active == 1
                    ? "flex items-center gap-2 cursor-pointer"
                    : "flex items-center gap-2 text-white/50 cursor-pointer"
                }
                onClick={(): void => setActive(1)}>
                <MdTableRows />
                Profile
              </p>
              <p
                className={
                  active == 2
                    ? "flex items-center gap-2 cursor-pointer"
                    : "flex items-center gap-2 text-white/50 cursor-pointer"
                }
                onClick={(): void => setActive(2)}>
                <FaRegComment />
                My Comments
              </p>
            </div>
            {active == 1 ? (
              <Profile data={data} setData={setData} />
            ) : (
              <MyComments comment={comment} setComment={setComment} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
