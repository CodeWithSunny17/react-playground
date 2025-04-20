import React, { useEffect, useState } from "react";

export default function FetchDataMapFilterReduce() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      // console.log(data);
      setUsers(data);
    } catch (error) {
      console.error("error is: " + error);
      setError("the error is: " + error);
    } finally {
      setLoading(false);
    }
  };

  const mapData = () => {
    let filteredData =
      users && users.filter((user) => user.name.includes("am"));

    const square = numbers
      .filter((item) => item <= 5)
      .map((item) => item * item);

    setNumbers(square);
    console.log(square);
    setUsers(filteredData);
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
        <div key={i}>{n}</div>
      ))}
      <br />
      <button className="bg-amber-400 p-2 rounded-md" onClick={mapData}>
        Filter Data
      </button>
    </div>
  );
}
