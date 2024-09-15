import React from "react";
import { PostInf } from "../postInf/PostInf";

import "./postCard.scss";

export const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-card__img"></div>

      <PostInf />
    </div>
  );
};
