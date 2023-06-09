import React, { useState, useEffect, useContext } from "react";
import Header from "@/components/HeaderNavFooter/Header";
import Footer from "@/components/HeaderNavFooter/Footer";
import { RestaurantStart } from "@/components/RestaurantDetail/RestaurantStart";
import { Menu } from "@/components/RestaurantDetail/Menu";
import { RestaurantInfo } from "@/components/RestaurantDetail/RestaurantInfo";
import Comment from "@/components/commentsRates/CommentRes";
import { useRouter } from "next/router";
import { IDetailRest } from "@/components/InterfaceEnumsMeta/InterFace";
import axios from "axios";
import Utils from "@/utils/helper";
import { LoadingContext } from "@/utils/ContextConfig";
import { Loading } from "@/components/Loading";
import { toast, ToastOptions } from "react-toastify";

export default function Restaurant(): JSX.Element {
  const [restaurant, setRestaurant] = useState<IDetailRest>();
  const { loading, setLoading }: any = useContext(LoadingContext);
  const route = useRouter();
  const { id } = route.query;
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

  useEffect(() => {
    getData();
  }, [id]);

  const getData = (): void => {
    if (id) {
      setLoading(true);
      axios
        .get(`${Utils.API_URL}/restaurant?id=${id}`)
        .then((res) => {
          if (!res.data.status) {
            toast.error("Please try again!", toastStyle);
          } else {
            setRestaurant(res.data.result[0]);
          }
        })
        .catch(() => toast.error("Please try again", toastStyle))
        .finally(() => setLoading(false));
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className="bg-black text-white">
        {loading ? (
          <div className={loading ? "block absolute top-0 bg-black" : "hidden"}>
            Loading
          </div>
        ) : (
          <div className={loading ? "hidden" : "block"}>
            {restaurant && (
              <>
                <RestaurantStart restaurant={restaurant} />
                <div className="px-32 py-10">
                  <Menu />
                  <RestaurantInfo restaurant={restaurant} />
                  <Comment />
                </div>
              </>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
