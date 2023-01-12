import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{transform: `rotate(${counter * 40}deg)`}} className="App-logo"alt="logo" />
         <div style={{fontSize: "40px"}}>{counter}</div>
         <div>
            <button onClick={() => setCounter(counter-1)}>-</button>
            <button onClick={() => setCounter(counter+1)}>+</button>
         </div>
      </header>
    </div>
  );
}

export default App;
