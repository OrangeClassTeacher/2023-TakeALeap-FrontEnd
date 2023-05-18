import React from "react";
import { MdLocationPin } from "react-icons/md";

export default function Marker({ coordinates, restaurant }: any) {
  return (
    <div className="circle" lat={coordinates[0]} lng={coordinates[1]}>
      <span className="circleText text-red-500 text-3xl absolute">
        <MdLocationPin />
      </span>
    </div>
  );
}
