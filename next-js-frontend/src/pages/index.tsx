import Carousel from "../components/Carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopComments from "@/components/TopComments";
import { PopularDish } from "@/components/PopularDish";
import axios from "axios";
import { ITopFoods } from "@/components/InterFace";
import RestaurantLilSlide from "@/components/RestaurantLilSlide";
import { IRestaurant } from "../components/InterFace";
import { ITopRestaurant } from "@/components/InterFace";
import Utils from "@/utils/helper";

export default function index(props: {
  topRestaurant: [ITopRestaurant];
  topFoods: [ITopFoods];
  allRestaurant: [IRestaurant];
}) {
  return (
    <>
      <Header />
      <Carousel items={props?.topRestaurant} />
      <RestaurantLilSlide data={props?.allRestaurant} />
      <PopularDish data={props?.topFoods} />
      <TopComments />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const TopRestaurant = await axios
    .get(`${Utils.API_URL}/toprestaurant`)
    .catch((err) => console.log(err));

  const TopFood = await axios
    .get(`${Utils.API_URL}/gettopfoods`)
    .catch((err) => console.log(err));

  const AllRestaurant = await axios
    .get(`${Utils.API_URL}/restaurants`)
    .catch((err) => console.log(err));

  return {
    props: {
      topRestaurant: TopRestaurant?.data.result,
      topFoods: TopFood?.data.result,
      allRestaurant: AllRestaurant?.data.result,
    },
  };
}
