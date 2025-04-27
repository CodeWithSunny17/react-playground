import React, { useEffect, useState } from "react";

export default function SearchFilterData() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);
      setUsers(data);
      setFilteredUsers(data);
    } catch (error) {
      console.error("error is: " + error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filterData = () => {
    let filteredData = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };
  useEffect(() => {
    const searchResult = setTimeout(() => {
      //note: Debouncing is optional here
      filterData();
    }, 800);

    return () => clearTimeout(searchResult);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="search a user"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <h1>Users</h1>
      {filteredUsers &&
        filteredUsers.map((user, index) => <div key={index}>{user.name}</div>)}
    </div>
  );
}
