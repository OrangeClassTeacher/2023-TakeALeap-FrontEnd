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
            <div className="flex">
              <FaStar />
              <FaStar />
            </div>
          ) : stars == 3 ? (
            <div className="flex">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          ) : stars == 4 ? (
            <div className="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          ) : (
            <div className="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      )}
    </div>
  );
}
