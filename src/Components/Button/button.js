import React from 'react';
import { Button as AntButton } from 'antd';
import '../Button/button.css'

const Button = ({ clickHandler }) => {
  return (
    <AntButton className='mainBtn' onClick={clickHandler}>Add rows</AntButton>
  );
}

export default Button;