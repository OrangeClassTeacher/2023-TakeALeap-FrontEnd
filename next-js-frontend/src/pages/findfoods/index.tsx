import { useState } from "react";
import { NavCateg } from "@/components/NavCateg";
import { NavbarCustom } from "@/components/NavbarCustom";
import axios from "axios";
import { IFood } from "@/components/InterFace";
import Link from "next/link";
import Image from "next/image";

import Footer from "@/components/Footer";

const meal = [
  "Soup",
  "Main Course",
  "Dessert",
  "SetFood",
  "Traditional",
  "FastFood",
  "Other",
];
interface IData {
  rowCount: [
    {
      foods: number;
    }
  ];
  result: [
    {
      _id: string;
      avg_score: number;
      foods: IFood;
    }
  ];
}
const Search = () => {
  const init = {
    text: "",
    rate: "all",
    price: "lowToHight",
    meal: "all",
  };

  const [all, setAll] = useState(init);
  const [data, setData] = useState<IData>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const getData = () => {
    console.log(all);
    axios
      .post(`http://localhost:8080/api/allsearchfood`, all)
      .then((res) => setData(res.data.result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-black text-white">
      <NavbarCustom />
      <NavCateg />
      <div className="flex p-10">
        <div className="basis-1/5">
          <div className="flex flex-col p-8   bg-gray-900 rounded ">
            <div className="flex flex-col">
              <div className="font-semibold pt-5 text-gray-200 my-2">Meal:</div>
              <select
                id="meal"
                value={all.meal}
                onChange={(e) => setAll({ ...all, meal: e.target.value })}
                className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white text-black">
                <option value="all">All</option>
                {meal.map((item, ind) => {
                  return (
                    <option key={ind} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold pt-3 text-gray-200 my-2">
                Rating:
              </div>
              <select
                id="rating"
                value={all.rate}
                onChange={(e) => setAll({ ...all, rate: e.target.value })}
                className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white text-black">
                <option value="all">All</option>
                <option value="one">over 1</option>
                <option value="two">over2</option>
                <option value="three">over 3</option>
                <option value="four">over 4</option>
              </select>
            </div>
            <div className="flex flex-col">
              <div className="font-semibold pt-3 text-gray-200 my-2">
                Sort by price:
              </div>
              <div className="text-white">
                <label htmlFor="lowToHigh">
                  <input
                    type="radio"
                    name="price"
                    value="lowToHigh"
                    checked={all.price === "lowToHigh"}
                    onChange={(e) => setAll({ ...all, price: e.target.value })}
                    className="mr-1"
                  />
                  Low to High
                </label>
              </div>
            </div>
            <div className="text-white">
              <label htmlFor="highToLow">
                <input
                  type="radio"
                  name="price"
                  value="highToLow"
                  checked={all.price === "highToLow"}
                  onChange={(e) => setAll({ ...all, price: e.target.value })}
                  className="mr-1 "
                />
                High to Low
              </label>
            </div>

            <div className="flex justify-center py-3">
              <button
                type="submit"
                className="bg-gray-400 hover:bg-gray-600 py-2 px-10 rounded-md text-black focus:outline-none mt-4 "
                onClick={() => getData()}>
                Filter
              </button>
            </div>
          </div>
        </div>
        <div className="  basis-4/5">
          <div className="flex justify-center">
            <div className="flex flex-col w-3/4">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search here"
                    value={all.text}
                    onChange={(e) => setAll({ ...all, text: e.target.value })}
                    className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none  flex-grow w-3/4 text-black"
                  />
                  <button
                    type="submit"
                    className="bg-gray-400 hover:bg-gray-600 py-2 px-5 rounded-md text-black focus:outline-none"
                    onClick={() => getData()}>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-3">
            {data?.result?.map((item, ind) => {
              return (
                <Link href={`/food?id=${item._id}`} key={ind}>
                  <div className="m-5 rounded bg-white text-black">
                    <div className="w-full h-[200px] overflow-hidden objec-cover">
                      <Image
                        src={item?.foods?.img[0]}
                        width={400}
                        height={400}
                        alt="img"
                        className="rounded object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h1 className=" text-md uppercase m-1">
                        {item?.foods.foodName}
                      </h1>
                      <p className="pb-2">Price : {item?.foods.price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
