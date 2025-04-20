import React, { useRef } from "react";

export default function UncontrolledComponentExample() {
  const name = useRef(null);
  const age = useRef(null);

  const submit = () => {
    console.log(name.current.value);
    console.log(age.current.value);
  };
  return (
    <div>
      <h1>Uncontrolled form</h1>
      <input type="text" ref={name} placeholder="name" />
      <input type="text" ref={age} placeholder="age" />
      <button onClick={submit}>submit</button>
    </div>
  );
}
