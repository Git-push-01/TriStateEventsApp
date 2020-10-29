import React, { useState } from 'react';
import './App.css';


const  App = () => {

  const [count, setCount] = useState(0)


  return (
    <div className="App">
    <button type="button" onClick={() => setCount(count + 1)}>Click me</button>
    <div>Clicks:{count}</div>

    </div>
  );
}

export default App;
