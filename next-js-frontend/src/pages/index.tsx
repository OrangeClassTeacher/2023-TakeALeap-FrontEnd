import Carousel from "../components/Carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopComments from "@/components/TopComments";
import { PopularDish } from "@/components/PopularDish";
import axios from "axios";
import { Ifoods } from "@/components/InterFace";
import RestaurantLilSlide from "@/components/RestaurantLilSlide";
import { IRestaurant } from "../components/InterFace";
interface Irestaurant {
  _id: {
    restaurantName: string;
    img: [string];
  };
  avg_score: number;
}

export default function index(props: {
  topRestaurant: [Irestaurant];
  topFoods: [Ifoods];
  allRestaurant: [IRestaurant];
}) {
  return (
    <>
      <Header />
      <Carousel items={props.topRestaurant} />
      <RestaurantLilSlide data={props.allRestaurant} />
      <TopComments />
      <PopularDish data={props.topFoods} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(pageSize: string) {
  const TopRestaurant = await axios
    .get("http://localhost:8080/api/toprestaurants")
    .catch((err) => console.log(err));

  const TopFood = await axios
    .get("http://localhost:8080/api/gettopfoods")
    .catch((err) => console.log(err));

  const AllRestaurant = await axios
    .get("http://localhost:8080/api/restaurants")
    .catch((err) => console.log(err));

  return {
    props: {
      topRestaurant: TopRestaurant?.data.result,
      topFoods: TopFood?.data.result,
      allRestaurant: AllRestaurant?.data.result,
    },
  };
}
