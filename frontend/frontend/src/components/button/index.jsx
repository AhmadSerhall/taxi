import React from 'react';
import './style.css';

const Button = ({ backgroundColor, textColor, text, onClick }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
  };

  return (
    <div>
      <button className='button' style={buttonStyle} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
