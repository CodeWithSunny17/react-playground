import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RESTApiRequests() {
  const [name, setaName] = useState("");
  const [data, setData] = useState([]);

  const postData = () => {
    axios
      .post("https://6805fbbaca467c15be6aae15.mockapi.io/users", {
        name: name,
        age: 25,
        hobbies: ["basketball", "chess", "coding"],
      })
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((error) => console.log(error));
  };

  const getData = () => {
    axios
      .get("https://6805fbbaca467c15be6aae15.mockapi.io/users")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  const updateData = (id) => {
    axios
      .put(`https://6805fbbaca467c15be6aae15.mockapi.io/users/${id}`, {
        name: name,
        age: 25,
        hobbies: ["basketball", "chess", "coding"],
      })
      .then((res) => {
        setData(res.data);
        getData();
      })
      .catch((error) => console.log(error));
  };
  const deleteData = (id) => {
    axios
      .delete(`https://6805fbbaca467c15be6aae15.mockapi.io/users/${id}`)
      .then((res) => {
        setData(res.data);
        getData();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setaName(e.target.value)}
        className="bg-amber-100 p-1 rounded-lg"
      />
      <button onClick={postData} className="bg-gray-400 rounded-lg m-2 p-1">
        post data
      </button>
      <br />
      <br />
      get request data is here:
      {data
        ? data.map((item) => {
            return (
              <div key={item.id}>
                {item.name} {item.age}
                <button
                  className="bg-gray-400 rounded-lg m-2 p-1"
                  onClick={() => updateData(item.id)}
                >
                  update
                </button>
                <button
                  className="bg-gray-400 rounded-lg m-2 p-1"
                  onClick={() => deleteData(item.id)}
                >
                  delete
                </button>
                <br />
              </div>
            );
          })
        : "loading..."}
    </div>
  );
}
