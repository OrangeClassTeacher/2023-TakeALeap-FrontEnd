import Carousel from "../components/homePage/Carousel";
import Header from "@/components/HeaderNavFooter/Header";
import Footer from "@/components/HeaderNavFooter/Footer";
import TopComments from "@/components/homePage/TopComments";
import { PopularDish } from "@/components/homePage/PopularDish";
import axios from "axios";
import RestaurantLilSlide from "@/components/homePage/RestaurantLilSlide";
import Portfolio from "@/components/homePage/Portfolio";
import {
  IRestaurant,
  ITopRestaurant,
  ITopFoods,
  IUserPoint,
  ITopComment,
} from "../components/InterfaceEnumsMeta/InterFace";
import Utils from "@/utils/helper";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Loading } from "@/components/Loading";
import { LoadingContext } from "@/utils/ContextConfig";
import AllMap from "@/components/homePage/AllMap";

export default function Index(): JSX.Element {
  const [restaurants, setRestaurant] = useState<IRestaurant[]>([]);
  const [topFood, setTopFood] = useState<ITopFoods[]>([]);
  const [topRestaurant, setTopRestaurant] = useState<ITopRestaurant[]>([]);
  const [lastComments, setLastComments] = useState<ITopComment[]>([]);
  const [topConterbuter, setTopConterbuter] = useState<IUserPoint[]>([]);
  const { loading, setLoading }: any = useContext(LoadingContext);

  const getData = async (): Promise<void> => {
    setLoading(true);
    await axios
      .get(`${Utils.API_URL}/toprestaurant`)
      .then((res) => {
        setTopRestaurant(res.data.result);
      })
      .catch((err) => console.log(err));

    await axios
      .get(`${Utils.API_URL}/gettopfoods`)
      .then((res) => {
        setTopFood(res.data.result);
      })
      .catch((err) => console.log(err));

    await axios
      .get(`${Utils.API_URL}/restaurants`)
      .then((res) => {
        setRestaurant(res.data.result);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${Utils.API_URL}/latestcomments`)
      .then((res) => {
        setLastComments(res.data.result);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${Utils.API_URL}/users/topusers`)
      .then((res) => {
        setTopConterbuter(res.data.result);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect((): void => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="sav bg-black text-white">
        <section className="overflow-hidden h-full">
          <Header />
          {topRestaurant.length > 0 ? <Carousel items={topRestaurant} /> : ""}
        </section>
        <section className="flex items-center justify-evenly h-full">
          {restaurants.length > 0 ? (
            <RestaurantLilSlide data={restaurants} />
          ) : (
            ""
          )}
        </section>
        <section className="h-full">
          {topFood.length > 0 ? <PopularDish data={topFood} /> : ""}
        </section>
        <section className="h-full">
          {lastComments.length > 0 && topConterbuter.length > 0 && (
            <TopComments
              lastComments={lastComments}
              topConterbuter={topConterbuter}
            />
          )}
        </section>
        <section className="h-full">
          {restaurants.length && <AllMap restaurants={restaurants} />}
        </section>
        <section className="h-full">
          <Portfolio />
        </section>
        <section className="h-full flex items-center">
          <Footer />
        </section>
      </div>
    </>
  );
}
