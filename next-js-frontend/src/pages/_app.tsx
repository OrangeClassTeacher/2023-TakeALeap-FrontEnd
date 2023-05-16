import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";
import { UserContext } from "@/context/ContextConfig";
import { useEffect, useState } from "react";
import { IUser } from "@/components/InterfaceEnumsMeta/InterFace";
import axios from "axios";
import Utils from "@/utils/helper";

export default function App({ Component, pageProps }: AppProps) {
  const [userSign, setUserSign] = useState<IUser>();
  useEffect(() => {
    const id = typeof window !== "undefined" ? localStorage.getItem("id") : "";
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : "";

    if (id && token) {
      axios
        .post(`${Utils.API_URL}/getbyuserid?id=${id}`, { token: token })
        .then((res) => {
          setUserSign(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ userSign, setUserSign }}>
        <Layout className="font-sans">
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </>
  );
}
