import React from "react";
import { FaStar } from "react-icons/fa";

export default function Stars({ stars }: any): JSX.Element {
  return (
    <div className="flex justify-center">
      {stars && stars !== 0 ? (
        <div className="text-yellow-400">
          {stars == 1 ? (
            <FaStar />
          ) : stars == 2 ? (
            <p className="flex">
              <FaStar />
              <FaStar />
            </p>
          ) : stars == 3 ? (
            <p className="flex">
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
          ) : stars == 4 ? (
            <p className="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
          ) : (
            <p className="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
          )}
        </div>
      ) : (
        <div>
          <p className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
        </div>
      )}
    </div>
  );
}