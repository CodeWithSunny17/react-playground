import React, { useEffect, useState } from "react";
import rData from "./Recursiondata.json";
import RecursionComponent from "./RecursionComponent";

export default function RecursionApp({}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(rData);
    setData(rData);
  }, []);
  return <RecursionComponent data={data} />;
}
