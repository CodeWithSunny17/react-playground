import React, { useState } from "react";

export default function FormDynamicInput() {
  const [formData, setFormData] = useState({});
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { [name]: value };
    setFormData({ ...formData, ...data });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
    setList([...list, formData]);
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <div className="flex flex-col w-1/4 gap-2 m-4">
          <input
            className="bg-gray-300 border-2 p-1"
            type="text"
            name="name"
            placeholder="your name"
            onChange={handleChange}
          />
          <input
            className="bg-gray-300 border-2 p-1"
            type="number"
            name="age"
            placeholder="your age"
            onChange={handleChange}
          />
          <input
            className="bg-gray-300 border-2 p-1"
            type="date"
            name="date"
            placeholder="dob"
            onChange={handleChange}
          />
          <input
            className="bg-gray-300 border-2 p-1"
            type="text"
            name="hobbies"
            placeholder="hobbies"
            onChange={handleChange}
          />
        </div>
        <button className="bg-blue-300 border-2 w-1/4 gap-2 m-4" type="submit">
          Submit
        </button>
      </form>
      <br />
      <br />
      {list.map((item, i) => (
        <div className="flex flex-col gap-1 m-4" key={i}>
          <span>{item.name}</span>
          <span>{item.age}</span>
          <span>{item.date}</span>
          <span>{item.hobbies}</span>
        </div>
      ))}
    </>
  );
}
