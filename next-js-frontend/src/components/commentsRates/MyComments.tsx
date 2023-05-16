import React, { useState } from "react";
import { ShowComment } from "./ShowComment";

export const MyComments = ({ comment, setComment }: any) => {
  const [showAllCom, setShowAllCom] = useState<boolean>(false);
  console.log(comment);

  return (
    <div>
      {comment ? (
        <ShowComment all={comment} showAllCom={showAllCom} />
      ) : (
        <div>No Comment</div>
      )}
    </div>
  );
};
