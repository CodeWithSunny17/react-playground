import React from "react";
import CustomHook from "./CustomHook";

export default function CustomHooksApp() {
  const { users, posts } = CustomHook();
  return (
    <div>
      <h1>users</h1>
      {users.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
      <br />
      <h1>posts</h1>
      {posts.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </div>
  );
}
