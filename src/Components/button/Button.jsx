import React from 'react';

const Button = ({ label, onClick, style, disabled }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
