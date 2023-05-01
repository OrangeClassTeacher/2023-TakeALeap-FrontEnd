import axios from "axios";
import React, { useEffect, useState } from "react";

export const Explore = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [mixed, setMixed] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/comments")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  //   const mix = () => {
  //     data.map((item, ind) => {
  //         setMixed({...mixed, {img:item. }})
  //     });
  //   };

  return (
    <div>
      <div className="w-[600px]">
        explore
        {/* {data?.map((item, ind) => {
          return <div key={ind}></div>;
        })} */}
      </div>
    </div>
  );
};
