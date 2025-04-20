import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function InnerHTMLInReact() {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <ReactQuill onChange={handleChange} />
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </div>
  );
}
