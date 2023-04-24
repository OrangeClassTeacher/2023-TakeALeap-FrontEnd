import { useEffect, useState } from "react";
import { NavCateg } from "@/components/NavCateg";
import { NavbarCustom } from "@/components/NavbarCustom";
import axios from "axios";
import { useRouter } from "next/router";

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

const Search = () => {
  const route = useRouter();
  const { type } = route.query;
  console.log(type);

  const init = {
    text: "",
    category: type ? type : "all",
    price: "lowToHigh",
    rate: "all",
    meal: "all",
    location: "all",
  };

  const [all, setAll] = useState(init);
  const [data, setData] = useState();

  useEffect(() => {
    console.log(type);

    // if (type) {
    //   axios
    //     .post(`http://localhost:8080/api/search`, {
    //       all,
    //     })
    //     .then((res) => setData(res.data.result))
    //     .catch((err) => console.log(err));
    // }
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const getData = () => {
    console.log(all);
    // axios
    //   .post(`http://localhost:8080/api/search`, {
    //     price: price,
    //     rate: rating,
    //     location: location,
    //     cuisineType: category,
    //     searchText: text,
    //     foodType: meal,
    //   })
    //   .then((res) => setData(res.data.result))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="bg-black text-white">
      <NavbarCustom />
      <NavCateg />
      <div className="flex p-10">
        <div className="basis-1/5">
          <div className="flex flex-col p-8   bg-gray-900 rounded ">
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
              <div className="font-semibold pt-5 text-gray-200 my-2">Meal:</div>
              <select
                id="meal"
                value={all.meal}
                onChange={(e) => setAll({ ...all, meal: e.target.value })}
                className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white text-black">
                <option value="All">All</option>
                <option value="Seafood">Seafood</option>
                <option value="Pork">Pork</option>
                <option value="Lamb">Lamb</option>
                <option value="Something">Something</option>
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
                  className="mr-1"
                />
                High to Low
              </label>
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
                <option value="overone">over 1</option>
                <option value="overtwo">over2</option>
                <option value="overthree">over 3</option>
                <option value="overfour">over 4</option>
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
                <option value="center">center</option>
                <option value="east">east</option>
                <option value="west">west</option>
                <option value="north">north</option>
                <option value="north">south</option>
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
        <div className="flex justify-center   basis-4/5">
          <div className="flex flex-col w-3/4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Search here"
                  value={all.text}
                  onChange={(e) => setAll({ ...all, text: e.target.value })}
                  className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 flex-grow w-3/4"
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

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
