import { useState, useEffect } from "react";

function CustomHook() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };
  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);
  return { users, posts };
}

export default CustomHook;
