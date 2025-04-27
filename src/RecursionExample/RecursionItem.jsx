import React, { useState } from "react";
import RecursionComponent from "./RecursionComponent";

export default function RecursionItem({ data }) {
  const [showItem, setShowItem] = useState({});

  const hanldeToggle = (id) => {
    setShowItem({
      ...showItem,
      [id]: !showItem[id],
    });
    console.log(showItem);
  };
  return (
    <li className="pl-4">
      <h2 onClick={() => hanldeToggle(data.id)}>{data.title}</h2>
      {data && showItem[data.id] && <RecursionComponent data={data.children} />}
    </li>
  );
}
