import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { Button as AntButton } from 'antd';
import Operator from '../Operator/operator';






function RowList() {
  const [newRow, setNewRow] = useState([]);

  const clickHandler = () => {
    const newRows = [...newRow, { value: '', toggle: true, symbol: '+' }];
    setNewRow(newRows);
  };

  const inputHandler = (e, index) => {
    const { value } = e.target;
    const newRowsCopy = [...newRow];
    newRowsCopy[index].value = value;
    setNewRow(newRowsCopy);
  };

  const operatorHandler = (index, CurrentOperator) => {
    const newRowsArray = [...newRow];
    newRowsArray[index].symbol = CurrentOperator;
    setNewRow(newRowsArray);
  };

  const removeRowHandler = (index) => {
    const newRows = [...newRow];
    newRows.splice(index, 1);
    setNewRow(newRows);
  };

  const toggleHandler = (index) => {
    const newRowsArray = [...newRow];
    newRowsArray[index].toggle = !newRowsArray[index].toggle;
    setNewRow(newRowsArray);
  };

  const calculateTotal = () => {
    let total = 0;
    for (const row of newRow) {
      if (row.toggle) {
        const value = Number(row.value) * (row.symbol === '+' ? 1 : -1);
        total += value;
      }
    }
    return total;
  };

  return (
    <div className="row">
       <AntButton onClick={clickHandler}>Add rows</AntButton>
      <ul>
        <div className="result">
          <p>Result {calculateTotal()}</p>
        </div>
        {newRow.map((row, index) => (
          <li key={index}>
            <Operator
              index={index}
              operator={row.symbol}
              operatorHandler={operatorHandler}
            />
            <Input
              type="number"
              placeholder="Enter your number"
              value={row.value}
              onChange={(e) => inputHandler(e, index)}
              disabled={!row.toggle}
            />
            <Button className="deleteBtn" onClick={() => removeRowHandler(index)}>
              Delete
            </Button>
            <Button
              onClick={() => toggleHandler(index)}
              style={{
                backgroundColor: row.toggle ? '#7EED68' : '#535752',
                color: 'black',
                border: 'none',
              }}>
              {row.toggle ? 'Enabled' : 'Disabled'}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RowList;
