import Carousel from "../components/homePage/Carousel";
import Header from "@/components/HeaderNavFooter/Header";
import Footer from "@/components/HeaderNavFooter/Footer";
import TopComments from "@/components/homePage/TopComments";
import { PopularDish } from "@/components/homePage/PopularDish";
import axios from "axios";
import { ITopFoods } from "@/components/InterfaceEnumsMeta/InterFace";
import RestaurantLilSlide from "@/components/homePage/RestaurantLilSlide";
import { IRestaurant } from "../components/InterfaceEnumsMeta/InterFace";
import { ITopRestaurant } from "@/components/InterfaceEnumsMeta/InterFace";
import Utils from "@/utils/helper";

export default function index(props: {
  topRestaurant: ITopRestaurant[];
  topFoods: ITopFoods[];
  allRestaurant: IRestaurant[];
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
