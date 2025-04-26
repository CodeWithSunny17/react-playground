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

const postsComp = HigherOrder("Posts", "posts", Posts); //3 arguments are (title, API request endpoint, Component)
export default postsComp;
