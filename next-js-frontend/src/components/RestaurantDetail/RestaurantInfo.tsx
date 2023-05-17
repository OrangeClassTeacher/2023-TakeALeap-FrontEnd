import React from "react";
import Map from "./Map";
import { IDetailRest } from "../InterfaceEnumsMeta/InterFace";
import { FaFacebookSquare } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";

export const RestaurantInfo = ({
  restaurant,
}: {
  restaurant?: IDetailRest;
}) => {
  const { email, contact, address }: any = restaurant?.restaurant[0];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-t mt-5 pt-5">
      <div className="w-4/5">
        <h1 className="text-center text-2xl ">CONTACT</h1>
        <div className="my-2 md:my-5">
          <p className="text-xs">E-MAIL </p>
          <p className="text-xl">{email}</p>
        </div>
        <div className="my-2 md:my-5">
          <p className="text-xs">PHONE</p>
          <p className="text-xl">{contact.phone}</p>
        </div>
        <div className="my-2 md:my-5">
          <p className="text-xs">ADDRESS</p>
          <p className="text-xl">{address.address}</p>
        </div>
        <div className="my-2 md:my-5">
          <p className="text-xs">SOCIAL ACCOUNTS</p>
          <div
            className={
              contact?.facebook
                ? "flex items-center gap-2 hover:text-[#9395d3]"
                : "hidden"
            }
          >
            <FaFacebookSquare />
            <a href={contact.facebook}>Facebook</a>
          </div>
          <div
            className={
              contact?.instagram
                ? "flex items-center gap-2 hover:text-[#9395d3]"
                : "hidden"
            }
          >
            <FaFacebookSquare />
            <a href={contact.instagram}>Instagram</a>
          </div>
          <div
            className={
              contact?.link
                ? "flex items-center gap-2 hover:text-[#9395d3]"
                : "hidden"
            }
          >
            <GiEarthAmerica />
            <a href={contact.link}>Link</a>
          </div>
        </div>
      </div>
      <div className="border">
        <Map restaurant={restaurant?.restaurant[0]} />
      </div>
    </div>
  );
};
