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

const usersComp = HigherOrder("Users", "users", Users); //3 arguments are (title, API request endpoint, Component)
export default usersComp;
