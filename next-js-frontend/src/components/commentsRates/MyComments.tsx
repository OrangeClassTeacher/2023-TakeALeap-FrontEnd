import React, { useState } from "react";
import { ShowComment } from "./ShowComment";

export const MyComments = ({ comment }: any): JSX.Element => {
  const [showAllCom] = useState<boolean>(false);

  return (
    <div>
      {comment.length ? (
        <ShowComment all={comment} showAllCom={showAllCom} />
      ) : (
        <div>No Comment</div>
      )}
    </div>
  );
};
