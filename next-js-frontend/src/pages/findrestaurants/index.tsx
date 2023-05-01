import { useEffect, useState } from "react";
import { NavCateg } from "@/components/NavCateg";
import { NavbarCustom } from "@/components/NavbarCustom";
import axios from "axios";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { IRestaurant } from "../../components/InterFace";

const cuisines = [
  "Chinese",
  "Korean",
  "Italian",
  "Mongolian",
  "Japanese",
  "Mexican",
  "Turkish",
  "Russian",
  "Spanish",
  "Fast food",
];

const location = [
  "Багануур",
  "Багахангай",
  "Баянгол",
  "Баянзүрх",
  "Налайх",
  "Сонгинохайрхан",
  "Сүхбаатар",
  "Хан-Уул",
  "Чингэлтэй",
];

interface IData {
  rowCount: [
    {
      restaurant: number;
    }
  ];
  result: [
    {
      _id: string;
      avg_score: number;
      restaurant: [IRestaurant];
    }
  ];
}

const Search = () => {
  const init = {
    text: "",
    category: "all",
    rate: "all",
    location: "all",
  };

  const [all, setAll] = useState(init);
  const [data, setData] = useState<IData>();

  useEffect(() => {
    axios
      .post(`http://localhost:8080/api/allsearch`, all)
      .then((res) => {
        setData(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const getData = () => {
    axios
      .post(`http://localhost:8080/api/allsearch`, all)
      .then((res) => {
        setData(res.data.result);
        console.log(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-black text-white">
      <NavbarCustom />
      <NavCateg />
      <div className="flex p-10">
        <div className="basis-1/5">
          <div className="flex flex-col p-8 bg-[#1e1f23] rounded border border-white/20 ">
            <div className="flex flex-col">
              <div className="font-semibold text-gray-200 my-2">
                Cuisine Types:
              </div>
              <select
                id="category"
                value={all.category}
                onChange={(e) => setAll({ ...all, category: e.target.value })}
                className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white text-black">
                <option value="all">All</option>
                {cuisines.map((cuis, ind) => {
                  return (
                    <option value={cuis} key={ind}>
                      {cuis}
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
                <option value="two">over 2</option>
                <option value="three">over 3</option>
                <option value="four">over 4</option>
              </select>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold pt-3 text-gray-200 my-2">
                Location:
              </div>
              <select
                id="rating"
                value={all.location}
                onChange={(e) => setAll({ ...all, location: e.target.value })}
                className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white text-black">
                <option value="all">All</option>
                {location.map((item, ind) => {
                  return (
                    <option key={ind} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
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
        <div className="basis-4/5 mx-10">
          <div className="flex justify-center ">
            <div className="flex flex-col w-full ">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search here"
                    value={all.text}
                    onChange={(e) => setAll({ ...all, text: e.target.value })}
                    className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 flex-grow w-3/4 text-black"
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

          <div className="m-2 text-2xl">
            All Restaurant : {data?.result.length}
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {data?.result?.map((item, ind) => {
              return (
                <Link href={`/restaurant?id=${item._id}`} key={ind}>
                  <div className="m-2 rounded bg-[#1e1f23] text-white h-[340px] border border-white/20">
                    <Image
                      src={item?.restaurant[0]?.img[0]}
                      width={400}
                      height={400}
                      alt="img"
                      className="rounded"
                    />
                    <div className="m-3">
                      <h1 className="text-md uppercase mt-1 whitespace-wrap">
                        {item?.restaurant[0].restaurantName}
                      </h1>
                      <p className="text-sm whitespace-nowrap py-2 font-light">
                        {item.restaurant[0].address.address}
                      </p>
                      <div className="flex text-sm font-light">
                        Mon-Fri: {item.restaurant[0].schedule.weekday.open}~
                        {item.restaurant[0].schedule.weekday.close} clock
                      </div>
                      <div className="flex text-sm font-light">
                        Weekend: {item.restaurant[0].schedule.weekday.open}~
                        {item.restaurant[0].schedule.weekday.close} clock
                      </div>
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
