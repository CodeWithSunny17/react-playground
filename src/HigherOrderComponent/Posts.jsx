import React from "react";
import HigherOrder from "./HOC/HigherOrder";

function Posts({ dataArr }) {
  return (
    <div>
      {dataArr.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </div>
  );
}

const postsComp = HigherOrder("posts", Posts);
export default postsComp;
