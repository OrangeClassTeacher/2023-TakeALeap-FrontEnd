import Carousel from "../components/Carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import TopComments from "@/components/TopComments";
import card1 from "../img/card1.jpg";
import card2 from "../img/card2.png";
import card3 from "../img/card3.jpg";
import card4 from "../img/card4.jpg";
import { PopularDish } from "@/components/PopularDish";
import axios from "axios";

const imagesItems = [
  {
    img: <Image key={1} className="h-full w-full" src={card1} alt="testt" />,
    title: "hi1",
  },
  {
    img: <Image key={2} className="h-full w-full" src={card2} alt="teste" />,
    title: "hi2",
  },
  {
    img: <Image key={3} className="h-full w-full" src={card3} alt="teste" />,
    title: "hi3",
  },
  {
    img: <Image key={4} className="h-full w-full" src={card4} alt="teste" />,
    title: "hi4",
  },
];

export default function index() {
  return (
    <>
      <Header />
      <div className=" relative">
        {" "}
        <Carousel items={imagesItems} />
      </div>
      <Footer />
    </>
  );
}

// export async function getServerSideProps(pageSize: string) {
//   const TopUser = await axios
//     .get("http://localhost:8080/api/users/topusers")
//     .catch((err) => console.log(err));
//   const RecentComment = await axios
//     .get("http://localhost:8080/api/comments/latestcomments")
//     .catch((err) => console.log(err));

//   // const TopFood = await axios.get("").catch((err) => console.log(err));

//   return {
//     props: {
//       topUser: TopUser?.data.result,
//       RecentComment: RecentComment?.data.result,
//     },
//   };
// }
