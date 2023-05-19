import { useEffect, useState, useContext } from "react";
import { NavCateg } from "@/components/HeaderNavFooter/NavCateg";
// import { NavbarCustom } from "@/components/HeaderNavFooter/NavbarCustom";
import axios from "axios";
import Footer from "@/components/HeaderNavFooter/Footer";
import Link from "next/link";
import Image from "next/image";
import { IAllSearchRestaurant } from "../../components/InterfaceEnumsMeta/InterFace";
import Utils from "@/utils/helper";
import { cuisines } from "@/components/InterfaceEnumsMeta/enumValues";
import { location } from "@/components/InterfaceEnumsMeta/enumValues";
import { Loading } from "@/components/Loading";
import { LoadingContext } from "@/utils/ContextConfig";

const Search = (): JSX.Element => {
  const init = {
    text: "",
    category: "all",
    rate: "all",
    location: "all",
  };

  const [all, setAll] = useState(init);
  const [data, setData] = useState<IAllSearchRestaurant>();
  const { loading, setLoading }: any = useContext(LoadingContext);

  const getData = (): void => {
    setLoading(true);
    axios
      .post(`${Utils.API_URL}/restaurantallsearch`, all)
      .then((res) => {
        setData(res.data.result);
        console.log(res.data.result);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect((): void => {
    getData();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-black text-white">
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
                onChange={(e): void =>
                  setAll({ ...all, category: e.target.value })
                }
                className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white text-black">
                <option value="all">All</option>
                {cuisines.map((cuis, ind) => (
                  <option value={cuis} key={ind}>
                    {cuis}
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
                onChange={(e): void =>
                  setAll({ ...all, location: e.target.value })
                }
                className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white text-black">
                <option value="all">All</option>
                {location.map((item, ind) => (
                  <option key={ind} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-center py-3">
              <button
                type="submit"
                className="bg-gray-400 hover:bg-gray-600 rounded-md text-black focus:outline-none mt-4 mf "
                onClick={(): void => getData()}>
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
                    onChange={(e): void =>
                      setAll({ ...all, text: e.target.value })
                    }
                    className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 flex-grow w-3/4 text-black"
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

          <div className="m-2 text-2xl">
            All Restaurant : {data?.result.length}
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {data?.result?.map((item, ind) => (
              <Link href={`/restaurant?id=${item._id}`} key={ind}>
                <div className="jard">
                  <div className="  rounded bg-[#1e1f23] text-white h-[340px] border border-white/20">
                    <Image
                      src={item?.restaurant?.img[0]}
                      width={400}
                      height={400}
                      alt="img"
                      className="rounded doggo"
                    />
                    <div className="intro">
                      <div className="m-3 ">
                        <h1 className="rest">
                          {item?.restaurant.restaurantName}
                        </h1>
                        <p className="cheetah">
                          <span className="chef">
                            {item.restaurant.address.address}
                          </span>
                        </p>
                        <div className="flex text-sm font-light">
                          <span className="chef">
                            Mon-Fri: {item.restaurant.schedule.weekday.open}~
                            {item.restaurant.schedule.weekday.close} clock
                          </span>
                        </div>
                        <div className="flex text-sm font-light">
                          <span className="chef">
                            Weekend: {item.restaurant.schedule.weekday.open}~
                            {item.restaurant.schedule.weekday.close} clock
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
