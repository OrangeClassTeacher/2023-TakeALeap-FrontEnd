import React, { useState, useEffect, useContext } from "react";
import Header from "@/components/HeaderNavFooter/Header";
import Footer from "@/components/HeaderNavFooter/Footer";
import { Explore } from "@/components/Explore";
import { IExplore } from "@/components/InterfaceEnumsMeta/InterFace";
import { LoadingContext } from "@/utils/ContextConfig";
import axios from "axios";
import Utils from "@/utils/helper";
import { Loading } from "@/components/Loading";
import { toast } from "react-toastify";
import Link from "next/link";

export default function ExploreMain(): JSX.Element {
  const [data, setData] = useState<IExplore>();
  const { loading, setLoading }: any = useContext(LoadingContext);

  useEffect((): void => {
    setLoading(true);
    axios
      .get(`${Utils.API_URL}/comments`)
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
          setData(res.data);
          console.log(res.data);
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
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <div className="bg-black text-white relative">
        <div className="fixed w-screen h-screen top-0 bg-black/50 z-10 flex items-center justify-center text-4xl">
          <Link href={"/"} className="hover:text-white/50">
            Coming Soon
          </Link>
        </div>
        <Explore data={data} />
      </div>
      <Footer />
    </div>
  );
}
