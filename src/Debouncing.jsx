import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Debouncing() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const DebouncedData = setTimeout(() => {
      axios
        .get(`https://api.postalpincode.in/pincode/${query}`)
        .then((res) => {
          setData(res.data[0].PostOffice);
          console.log(res.data[0].PostOffice);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);

    return () => {
      clearTimeout(DebouncedData);
    };
  }, [query]);
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <br />
      <br />
      {!data
        ? ""
        : data.map((item, index) => {
            <li key={index}>{item.name}</li>;
          })}
    </div>
  );
}
