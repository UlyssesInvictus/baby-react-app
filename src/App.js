import React, { useState, useEffect, useRef } from 'react';
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
  const [text, setText] = useState(null);

  // didMount, didUpdate (willUpdate+render)
  useEffect(() => {
    document.title = text;
    console.log("This is the current text: ", text);

    if (text || text === "") {
      window.alert(`The text updated to: ${text}`);
    }
  }, [text]);

  const inputRef = useRef();

  return (
    <div className="App">
      <Button text="one" onClick={() => setText(text + " one")} />
      <Button text="two" onClick={() => setText(text + " two two")} />
      <Button text="red" background="red" currentText={text} setText={setText} />
      <Button text="blue" background="blue" currentText={text} setText={setText} />
      <Button text="reset" onClick={() => setText("")} />

      <div className="input">
        <textarea placeholder="Type in me!" ref={inputRef} />
        <button onClick={() => setText(text + " " + inputRef.current.value)}>add this</button>
      </div>

      <div className="text">
        { text || "Click a button to add text!" }
      </div>
    </div>
  );
}

export default App;
