import './App.css';
import { myImmortal } from './my_immortal';
import { useState } from 'react';

const getRandomNumber = () => Math.floor(Math.random() * myImmortal.length)

function App() {
  const [passage, setPassage] = useState(myImmortal[getRandomNumber()])

  console.info({passage});

  return (
    <div className="App">
      <header className="App-header">
        <div style={{marginBottom: '1em'}}>{passage}</div>
        <button style={{fontFamily: 'fantasy', textAlign: 'center', borderRadius: '3px', fontSize: '0.75em'}} onClick={() => setPassage(myImmortal[getRandomNumber()])}>New Passage</button>
      </header>
    </div>
  );
}

export default App;
