import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Operator = ({ index, operator, operatorHandler })  => {
  return (
    <Select value={operator} onChange={(value) => operatorHandler(index, value)}>
      <Option value="+"> + </Option>
      <Option value="-"> - </Option>
    </Select>
  );
}

export default Operator;
