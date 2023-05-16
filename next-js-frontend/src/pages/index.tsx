import Carousel from "../components/homePage/Carousel";
import Header from "@/components/HeaderNavFooter/Header";
import Footer from "@/components/HeaderNavFooter/Footer";
import TopComments from "@/components/homePage/TopComments";
import { PopularDish } from "@/components/homePage/PopularDish";
import axios from "axios";
import RestaurantLilSlide from "@/components/homePage/RestaurantLilSlide";
import {
  IRestaurant,
  ITopRestaurant,
  ITopFoods,
} from "../components/InterfaceEnumsMeta/InterFace";
import Utils from "@/utils/helper";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Loading } from "@/components/Loading";
import { LoadingContext } from "@/context/ContextConfig";

export default function Index() {
  const [restaurants, setRestaurant] = useState<IRestaurant[]>([]);
  const [topFood, setTopFood] = useState<ITopFoods[]>([]);
  const [topRestaurant, setTopRestaurant] = useState<ITopRestaurant[]>([]);
  const { loading, setLoading }: any = useContext(LoadingContext);

  useEffect(() => {
    // setLoading(true);
    axios
      .get(`${Utils.API_URL}/toprestaurant`)
      .then((res) => setTopRestaurant(res.data.result))
      .catch((err) => console.log(err));

    axios
      .get(`${Utils.API_URL}/gettopfoods`)
      .then((res) => setTopFood(res.data.result))
      .catch((err) => console.log(err));

    axios
      .get(`${Utils.API_URL}/restaurants`)
      .then((res) => {
        setRestaurant(res.data.result);
        // setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Header />
        <Carousel items={topRestaurant} />
        <RestaurantLilSlide data={restaurants} />
        <PopularDish data={topFood} />
        <TopComments />
        <Footer />
      </>
    );
  }
}
