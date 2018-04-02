import React from 'react';
import { render } from 'react-dom';

const MainApp = () => {
  return <h1>Hello React!</h1>;
};

render(<MainApp />, document.querySelector('app'));
