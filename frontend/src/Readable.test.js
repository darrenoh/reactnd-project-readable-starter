import React from 'react';
import ReactDOM from 'react-dom';
import Readable from './components/Readable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Readable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
