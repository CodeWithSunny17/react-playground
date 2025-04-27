import React from "react";
import RecursionComponent from "./RecursionComponent";

export default function RecursionItem({ data }) {
  return (
    <li className="pl-4">
      <h2>{data.title}</h2>
      <RecursionComponent data={data.children} />
    </li>
  );
}
