import { useEffect, useState, useContext } from "react";
import { NavCateg } from "@/components/HeaderNavFooter/NavCateg";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/HeaderNavFooter/Footer";
import { IAllSearchFood } from "@/components/InterfaceEnumsMeta/InterFace";
import Utils from "@/utils/helper";
import { meal } from "@/components/InterfaceEnumsMeta/enumValues";
import { Loading } from "@/components/Loading";
import { LoadingContext } from "@/utils/ContextConfig";
// import { IAllSearchFoodInit } from "@/components/InterfaceEnumsMeta/inits";
import { toast } from "react-toastify";

const init = {
  text: "",
  rate: "all",
  price: "lowToHight",
  meal: "all",
};

const Search = (): JSX.Element => {
  const [all, setAll] = useState(init);
  const [data, setData] = useState<IAllSearchFood>();
  const { loading, setLoading }: any = useContext(LoadingContext);

  const getData = (): void => {
    setLoading(true);
    axios
      .post(`${Utils.API_URL}/foodallsearch`, all)
      .then((res): void => {
        if (!res.data.status) {
          toast.error("Please try again!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          setData(res.data.result);
        }
      })
      .catch((err): void => console.log(err))
      .finally((): void => setLoading(false));
  };

  useEffect((): void => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-black text-white">
      <NavCateg />
      <div className="flex flex-col md:flex-row  p-10">
        <div className="md:basis-1/5">
          <div className="flex flex-col p-8   bg-gray-900 rounded ">
            <div className="flex flex-col">
              <div className="font-semibold pt-5 text-gray-200 my-2">Meal:</div>
              <select
                id="meal"
                value={all.meal}
                onChange={(e): void => setAll({ ...all, meal: e.target.value })}
                className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white text-black">
                <option value="all">All</option>
                {meal.map((item, ind) => (
                  <option key={ind} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <div className="font-semibold pt-3 text-gray-200 my-2">
                Rating:
              </div>
              <select
                id="rating"
                value={all.rate}
                onChange={(e): void => setAll({ ...all, rate: e.target.value })}
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
                    onChange={(e): void =>
                      setAll({ ...all, price: e.target.value })
                    }
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
                  onChange={(e): void =>
                    setAll({ ...all, price: e.target.value })
                  }
                  className="mr-1 "
                />
                High to Low
              </label>
            </div>

            <div className="flex justify-center py-3">
              <button
                type="submit"
                className="bg-gray-400 hover:bg-gray-600  rounded-md text-black focus:outline-none mt-4 mf"
                onClick={(): void => getData()}>
                Filter
              </button>
            </div>
          </div>
        </div>
        <div className="md:basis-4/5 mx-10 ">
          <div className="flex justify-center">
            <div className="flex flex-col w-full">
              <form className="flex flex-col space-y-2">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Search here"
                    value={all.text}
                    onChange={(e): void =>
                      setAll({ ...all, text: e.target.value })
                    }
                    className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none  flex-grow w-3/4 text-black"
                  />
                  <button
                    type="submit"
                    className="bg-gray-400 hover:bg-gray-600 py-2 px-5 rounded-md text-black focus:outline-none"
                    onClick={(): void => getData()}>
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="m-2 text-2xl">
              All Foods : {data?.result.length}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3">
              {data?.result.map((item, ind) => (
                <Link href={`/food?id=${item._id}`} key={ind}>
                  <div className="m-2 rounded bg-white text-black pard">
                    <div className="w-full h-[460px] overflow-hidden object-cover">
                      <Image
                        src={item.foods.img[0]}
                        width={400}
                        height={400}
                        alt="img"
                        className="rounded object-cover poggo"
                      />
                    </div>
                    <div className="text-center pntro">
                      <h1 className=" text-md uppercase m-1 chef">
                        {item.foods.foodName}
                      </h1>
                      <p className="pb-2 chef">Price : {item.foods.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
