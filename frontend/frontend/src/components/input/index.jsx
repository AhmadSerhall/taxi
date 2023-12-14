import React from "react";
import { useState } from "react";
import "./style.css";
import "../../styles/global.css";
const Input = ({ name, placeholder, width, label }) => {
  const inputStyle = {
    width: width,
  };
  const [formData, setFormData] = useState({ name: name.value });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    Child(formData);
  };

  function Child(formData) {
    return console.log(formData);
  }
  return (
    <div className="input flex column">
      <label className="label" htmlFor="name">
        {label}
      </label>
      <input
        type="text"
        onChange={handleChange}
        id={name}
        name={name}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
};

export default Input;
