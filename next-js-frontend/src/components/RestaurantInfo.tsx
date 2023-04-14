import React from "react";

export const RestaurantInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:10 ml-0 md:ml-20">
      <div className="w-4/5">
        <h1 className="text-center text-2xl ">CONTACT</h1>
        <div className="my-2 md:my-5">
          <p className="text-xs">E-MAIL</p>
          <p className="text-xl">emailhereeeee</p>
        </div>
        <div className="my-2 md:my-5">
          <p className="text-xs">PHONE</p>
          <p className="text-xl">+2 013 454 87 81</p>
        </div>
        <div className="my-2 md:my-5">
          <p className="text-xs">ADDRESS</p>
          <p className="text-xl">
            Olympic Street 7/3, Centrum tower #102, Sukhbaatar district,
            Ulaanbaatar, Mongolia
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
