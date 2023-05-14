import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";
import { Roboto } from "next/font/google";
import { UserContext } from "@/context/ContextConfig";
import { useState } from "react";
import { IUser } from "@/components/InterfaceEnumsMeta/InterFace";

export default function App({ Component, pageProps }: AppProps) {
  const [userSign, setUserSign] = useState<IUser>();

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
