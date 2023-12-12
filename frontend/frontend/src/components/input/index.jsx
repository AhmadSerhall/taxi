import React from 'react';
import "./style.css";
import "../../styles/global.css";
const Input = ({name,placeholder,width,label}) => {
    const inputStyle = {
        width: width,
    };
  return (
    <div className='input flex column'>
        <label className="label"htmlFor='name'>{label}</label>
      <input type='text' id={name} name={name} placeholder={placeholder} style={inputStyle} />
    </div>
  )
}

export default Input
