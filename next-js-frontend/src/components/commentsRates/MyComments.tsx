import React, { useState } from "react";
import { ShowComment } from "./ShowComment";

export const MyComments = ({ comment }: any): JSX.Element => {
  const [showAllCom] = useState<boolean>(true);

  return (
    <div className="h-[700px] overflow-scroll">
      {comment.length ? (
        <ShowComment all={comment} showAllCom={showAllCom} />
      ) : (
        <div>No Comment</div>
      )}
    </div>
  );
};
