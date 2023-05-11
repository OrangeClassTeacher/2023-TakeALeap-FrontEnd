import React from "react";
import Map from "./Map";
import { IDetailRest } from "./InterFace";
import { FaFacebookSquare } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";

export const RestaurantInfo = ({
  restaurant,
}: {
  restaurant?: IDetailRest;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-t mt-5 pt-5">
      <div className="w-4/5">
        <h1 className="text-center text-2xl ">CONTACT</h1>
        <div className="my-2 md:my-5">
          <p className="text-xs">E-MAIL </p>
          <p className="text-xl">{restaurant?.restaurant[0]?.email}</p>
        </div>
        <div className="my-2 md:my-5">
          <p className="text-xs">PHONE</p>
          <p className="text-xl">{restaurant?.restaurant[0]?.contact.phone}</p>
        </div>
        <div className="my-2 md:my-5">
          <p className="text-xs">ADDRESS</p>
          <p className="text-xl">
            {restaurant?.restaurant[0]?.address.address}
          </p>
        </div>
        <div className="my-2 md:my-5">
          <p className="text-xs">SOCIAL ACCOUNTS</p>
          <div
            className={
              restaurant?.restaurant[0]?.contact?.facebook
                ? "flex items-center gap-2 hover:text-[#9395d3]"
                : "hidden"
            }>
            <FaFacebookSquare />
            <a href={restaurant?.restaurant[0]?.contact.facebook}>Facebook</a>
          </div>
          <div
            className={
              restaurant?.restaurant[0]?.contact?.instagram
                ? "flex items-center gap-2 hover:text-[#9395d3]"
                : "hidden"
            }>
            <FaFacebookSquare />
            <a href={restaurant?.restaurant[0]?.contact.instagram}>Instagram</a>
          </div>
          <div
            className={
              restaurant?.restaurant[0]?.contact?.link
                ? "flex items-center gap-2 hover:text-[#9395d3]"
                : "hidden"
            }>
            <GiEarthAmerica />
            <a href={restaurant?.restaurant[0]?.contact.link}>Link</a>
          </div>
        </div>
      </div>
      <div className="border">
        <Map restaurant={restaurant?.restaurant[0]} />
      </div>
    </div>
  );
};
