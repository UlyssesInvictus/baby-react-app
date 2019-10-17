import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './App.css';

const Button = ({ text, background, onClick, currentText, setText }) => {
  const style = {};

  if (background) {
    style.background = background;
  }

  const handleClick = onClick || (() => setText(currentText + " " + text));

  return (
    <button className="button" style={style} onClick={handleClick}>
      I am a {text} button
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
  onClick: PropTypes.func,
  currentText: PropTypes.string,
  setText: PropTypes.func,
};

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <Button text="one" onClick={() => setText(text + " one")} />
      <Button text="two" onClick={() => setText(text + " two two")} />
      <Button text="red" background="red" currentText={text} setText={setText} />
      <Button text="blue" background="blue" currentText={text} setText={setText} />
      <Button text="reset" onClick={() => setText("")} />

      <div className="text">
        { text || "Click a button to add text!" }
      </div>
    </div>
  );
}

export default App;
