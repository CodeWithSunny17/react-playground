import React from "react";
import RecursionItem from "./RecursionItem";

export default function RecursionComponent({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <RecursionItem key={item.id} data={item} />
      ))}
    </ul>
  );
}
