import React, { useState } from "react";

export default function Sample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
