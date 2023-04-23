import { useState } from "react";

interface SearchProps {
  placeholder: string;
  onSearch: (
    query: string,
    category: string,
    hewani: string,
    sort: "lowToHigh" | "highToLow",
    rating: string
  ) => void;
}

const Search: React.FC<SearchProps> = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<"lowToHigh" | "highToLow">("lowToHigh");
  const [rating, setRating] = useState("all");
  const [hewani, setHewani] = useState("all");

  const handleQueryChange = (text: string) => {
    console.log(text);

    setQuery(text);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
    // console.log(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as "lowToHigh" | "highToLow");
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(event.target.value);
  };

  const handleHewaniChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHewani(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const getData = () => {
    console.log(query, category, sort, rating, hewani);
  };

  return (
    <div>
      <div className="flex justify-center bg-black">
        <div className="flex flex-col w-3/4">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="search here"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 flex-grow w-3/4"
              />
              <button
                type="submit"
                className="bg-gray-400 hover:bg-gray-600 py-2 px-5 rounded-md text-white focus:outline-none"
                onClick={() => getData()}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="flex flex-row ">
          <div className="flex flex-col w-1/4 space-y-2 bg-black">
            <div className="font-medium text-white">Categories:</div>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white"
            >
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
            </select>
            <div className="font-medium text-white">Hewani:</div>
            <select
              id="hewani"
              value={hewani}
              onChange={handleHewaniChange}
              className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white"
            >
              <option value="All">All</option>
              <option value="Seafood">Seafood</option>
              <option value="Pork">Pork</option>
              <option value="Lamb">Lamb</option>
              <option value="Something">Something</option>
            </select>
            <div className="font-medium text-white">Sort by:</div>
            <div className="text-white">
              <label htmlFor="lowToHigh">
                <input
                  type="radio"
                  name="sort"
                  value="lowToHigh"
                  checked={sort === "lowToHigh"}
                  onChange={handleSortChange}
                  className="mr-1"
                />
                Low to High
              </label>
            </div>
            <div className="text-white">
              <label htmlFor="highToLow">
                <input
                  type="radio"
                  name="sort"
                  value="highToLow"
                  checked={sort === "highToLow"}
                  onChange={handleSortChange}
                  className="mr-1"
                />
                High to Low
              </label>
            </div>
            <div className="font-medium text-white">Rating:</div>
            <select
              id="rating"
              value={rating}
              onChange={handleRatingChange}
              className="py-2 px-3 rounded-md bg-gray-100 focus:outline-none focus:bg-white"
            >
              <option value="all">All</option>
              <option value="below3">Below 3</option>
              <option value="3to4.5">3 to 4.5</option>
              <option value="over4.5">Over 4.5</option>
            </select>
            <div className="flex justify-center py-3">
              <button
                type="submit"
                className="bg-gray-400 hover:bg-gray-600 py-2 px-10 rounded-md text-white focus:outline-none mt-4 "
                onClick={() => getData()}
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
