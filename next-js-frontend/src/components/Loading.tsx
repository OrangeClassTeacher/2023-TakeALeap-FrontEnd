import React from "react";

export const Loading = ({ loading }: any) => {
  const tsas: number[] = [
    11, 12, 14, 18, 16, 19, 20, 19, 10, 16, 14, 18, 11, 13, 15, 12, 17, 13, 15,
    12,
  ];
  return (
    <div className="flex items-center justify-around h-screen w-full bg-black">
      <div className="">
        <div className="rain">
          {tsas?.map((i, ind) => (
            <span key={ind} style={{ "--i": i }}></span>
          ))}
        </div>
      </div>
    </div>
  );
};
