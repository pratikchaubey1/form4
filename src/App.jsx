import React, { useState } from "react";

function Form() {
  const [data, setData] = useState([{ name: "", email: "", message: "" }]);
  const handleChange = (e) => {
    e.preventDefault();
    // Destructure name and value from the event target
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(data);
  return (
    <div>
      <form className="flex flex-col gap-4 w-1/2 mx-auto mt-10">
        <label className="text-lg font-semibold">Name</label>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter your name"
          value={data.name}
          name="name"
          onChange={handleChange}
        />

        <label className="text-lg font-semibold">Email</label>
        <input
          type="email"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter your email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />

        <label className="text-lg font-semibold">Message</label>
        <textarea
          className="border border-gray-300 p-2 rounded-md"
          rows="4"
          placeholder="Your message"
          name="message"
          onChange={handleChange}
          value={data.message}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;