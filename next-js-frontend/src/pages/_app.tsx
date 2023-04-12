import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "500", "400", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout className="font-sans">
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
