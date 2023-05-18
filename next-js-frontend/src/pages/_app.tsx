import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";
import { UserContext } from "@/context/ContextConfig";
import { useContext, useEffect, useState } from "react";
import { IUser } from "@/components/InterfaceEnumsMeta/InterFace";
import axios from "axios";
import Utils from "@/utils/helper";
import { LoadingContext } from "@/context/ContextConfig";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  const [userSign, setUserSign] = useState<IUser>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = typeof window !== "undefined" ? localStorage.getItem("id") : "";
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : "";

    if (id && token) {
      setLoading(true);
      axios
        .post(`${Utils.API_URL}/getbyuserid?id=${id}`, { token: token })
        .then((res) => {
          setUserSign(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ userSign, setUserSign }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <Layout className="font-sans">
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </LoadingContext.Provider>
      </UserContext.Provider>
    </>
  );
}
