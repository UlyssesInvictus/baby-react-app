import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

const Button = ({ text, background }) => {
  const style = {};

  if (background) {
    style.background = background;
  }

  return (
    <button className="button" style={style}>
      I am a {text} button
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
};

function App() {
  return (
    <div className="App">
      <Button text="one" />
      <Button text="two" />
      <Button text="red" background="red" />
      <Button text="blue" background="blue" />
    </div>
  );
}

export default App;
