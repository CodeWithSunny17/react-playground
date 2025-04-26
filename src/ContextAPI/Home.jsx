import React, { useState } from "react";
import Profile from "./Profile";
import Name from "./Name";
import { UserData } from "./contexts/GlobalContext";

export default function Home() {
  const [name, setName] = useState("Name");
  const [age, setAge] = useState(26);
  return (
    <UserData.Provider value={{ name, setName, age }}>
      <Profile />
      <Name />
    </UserData.Provider>
  );
}
