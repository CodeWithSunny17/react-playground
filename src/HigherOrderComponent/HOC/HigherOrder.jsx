import React, { useState, useEffect } from "react";

export default function HigherOrder(title, Component) {
  return function HOC() {
    const [dataArr, setDataArr] = useState([]);

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${title}`
        );
        const data = await response.json();
        console.log(data);

        setDataArr(data);
      } catch (error) {
        console.error("error is: " + error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <div>
        <h1>{title}</h1>
        <Component dataArr={dataArr} />
        <br />
      </div>
    );
  };
}
