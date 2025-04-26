import React, { useEffect, useState } from "react";
import { getUsers } from "./getAllUsers";
import { addNum } from "./AddNumbers";

export default function HelperFunApp() {
  const [posts, setPosts] = useState([]);
  const addTwohelper = () => {
    let sum = addNum(5, 6);
    console.log(sum);
  };

  const getUsersHelper = async () => {
    let data = await getUsers(`posts`);
    setPosts(data);
    console.log(data);
  };

  useEffect(() => {
    getUsersHelper();
  }, []);
  return (
    <div>
      <button onClick={addTwohelper}>Add two number</button>
      <br />
      <br />
      {posts.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </div>
  );
}
