import React from 'react';
import ReactDOM from 'react-dom';
import  { useState } from 'react';  
import './App.css';
import CounterExample from './heffect';

 
function App() {
   // Declare a new state variable, which we'll call "count"  
   const [count, setCount] = useState(0); 
  return (
    <div className="App">
 <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>   
    
  
    </div>

  );
  
}

export default App;
