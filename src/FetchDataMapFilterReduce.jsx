import React, { useEffect, useState } from "react";

export default function FetchDataMapFilterReduce() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      // console.log(data);

      setUsers(data);
      setAllUsers(data);
    } catch (error) {
      console.error("error is: " + error);
      setError("the error is: " + error);
    } finally {
      setLoading(false);
    }
  };

  const filterData = (n) => {
    let filteredData = allUsers && allUsers.filter((user) => user.id === n);
    setUsers(filteredData);
  };

  const resetData = () => {
    setUsers(allUsers);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error !== null) return <div>{error}</div>;

  return (
    <div>
      <h1>Users</h1>
      {users && users.map((user, index) => <div key={index}>{user.name}</div>)}
      <br />
      {numbers.map((n, i) => (
        <div key={i} onClick={() => filterData(n)}>
          {n}
        </div>
      ))}
      <br />
      <button className="bg-amber-400 p-2 rounded-md" onClick={resetData}>
        Reset Data
      </button>
    </div>
  );
}
