import React from 'react';
import './App.css';

import Button from './Components/Button/button';
import RowList from './Components/RowList/rowList';



function App() {
  return (
    <div className="container">
      <div className="content-container">
        <Button />
        <br />
        <RowList />
      </div>
    </div>
  );
}

export default App;
