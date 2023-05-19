import React, { useState, useEffect, useContext } from "react";
import Header from "@/components/HeaderNavFooter/Header";
import Footer from "@/components/HeaderNavFooter/Footer";
import { Explore } from "@/components/Explore";
import { IExplore } from "@/components/InterfaceEnumsMeta/InterFace";
import { LoadingContext } from "@/utils/ContextConfig";
import axios from "axios";
import Utils from "@/utils/helper";
import { Loading } from "@/components/Loading";

export default function ExploreMain(): JSX.Element {
  const [data, setData] = useState<IExplore>();
  const { loading, setLoading }: any = useContext(LoadingContext);

  useEffect((): void => {
    setLoading(true);
    axios
      .get(`${Utils.API_URL}/comments`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <div className="bg-black text-white">
        <Explore data={data} />
      </div>
      <Footer />
    </div>
  );
}
