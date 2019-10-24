import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

const HomePage = () => {
  const [text, setText] = useState("");

  const prevText = usePrevious(text);

  // didMount, didUpdate (willUpdate+render)
  useEffect(() => {
    document.title = text;
    console.log("This is the current text: ", text);

    if (prevText || text) {
      window.alert(`The text updated to: ${text}`);
    }
  }, [text, prevText]);

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
};

const TestSection = () => "sub section";

const TestPage = ({ match: { params: { id } } }) => {
  return (
    <div>
      <Link to={`/${id}`}>Go to /{id}</Link>
      <p>
        <Route component={TestSection} />
      </p>

      <p>
        <Route path='/test/home' render={() => 'I only render for /test/home'} />
      </p>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={HomePage} />

        <Route path="/test/:id" component={TestPage} />
        <Route path="/test" component={TestPage} />

        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
