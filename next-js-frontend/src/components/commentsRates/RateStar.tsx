import React from "react";
import { FaStar } from "react-icons/fa";

export const RateStar = ({ rate, rateHandle }: any) => {
  return (
    <div className="flex text-4xl m-5">
      <FaStar
        className={rate > 0 ? "text-yellow-400" : ""}
        onClick={() => rateHandle(1)}
      />
      <FaStar
        className={rate > 1 ? "text-yellow-400" : ""}
        onClick={() => rateHandle(2)}
      />
      <FaStar
        className={rate > 2 ? "text-yellow-400" : ""}
        onClick={() => rateHandle(3)}
      />
      <FaStar
        className={rate > 3 ? "text-yellow-400" : ""}
        onClick={() => rateHandle(4)}
      />
      <FaStar
        className={rate > 4 ? "text-yellow-400" : ""}
        onClick={() => rateHandle(5)}
      />
    </div>
  );
};
