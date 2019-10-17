import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <button className="button">
        I am a one button
      </button>
      <button className="button">
        I am a two button
      </button>
      <button className="button" style={{ background: "red" }}>
        I am a red button
      </button>
      <button className="button" style={{ background: "blue" }}>
        I am a blue button
      </button>
    </div>
  );
}

export default App;
