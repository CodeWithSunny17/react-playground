import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RESTApiRequests() {
  const [data, setData] = useState([]);

  const postData = () => {
    axios
      .post("https://6805fbbaca467c15be6aae15.mockapi.io/users", {
        name: "sunny",
        age: 25,
        hobbies: ["basketball", "chess", "coding"],
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("https://6805fbbaca467c15be6aae15.mockapi.io/users")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <button onClick={postData}>post data</button>
      <br />
      <br />
      get request data is here:
      {data.map((item, i) => {
        return (
          <div>
            {item.name}+{item.age}
            <p>
              {item.hobbies.map((hobby) => {
                return <p>{hobby}</p>;
              })}
            </p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
