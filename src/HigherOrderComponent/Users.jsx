import React from "react";
import HigherOrder from "./HOC/HigherOrder";

function Users({ dataArr }) {
  return (
    <div>
      {dataArr.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </div>
  );
}

const usersComp = HigherOrder("users", Users);
export default usersComp;
