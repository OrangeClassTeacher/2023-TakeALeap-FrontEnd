import React from "react";
import Data from "./MockDataRes";

export const Menu = () => {
  const food = [Data, Data, Data, Data, Data, Data, Data, Data, Data];

  return (
    <div>
      <div>
        <h1>MENU</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-5 gap-10 text-white">
        {food.map((item, ind) => {
          return (
            <div key={ind}>
              <div>
                <img
                  src={item?.img[0]}
                  alt="img"
                  className="rounded-xl w-full h-[200px] object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-normal">{item.foodName}</p>
                <div className="flex justify-between font-light">
                  <p>Price: {item.price}</p>
                  <p>Type: {item.foodType}</p>
                </div>
                <div>rate here</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
