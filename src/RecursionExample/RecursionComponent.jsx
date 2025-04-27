import React from "react";
import RecursionItem from "./RecursionItem";

export default function RecursionComponent({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <RecursionItem data={item} />
      ))}
    </ul>
  );
}
