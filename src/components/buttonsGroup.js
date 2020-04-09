import React from 'react';
import Button from './common/button';

const ButtonsGroup = ({ buttons, onClickButton }) => {
  return (
    <div className='buttons'>
      {buttons.map((button, i) => (
        <Button key={i} text={button.toString()} onClick={onClickButton(button)} />
      ))}
    </div>
  );
};

export default ButtonsGroup;
