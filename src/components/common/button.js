import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button className='button is-primary' style={{ flex: 1 }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
