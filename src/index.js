import React from 'react';
import ReactDom from 'react-dom';
import App from './reactTransitionGroupDemo';
import './style.scss';

// const App = () => <div className='main'>hello world</div>;

ReactDom.render(<App />, document.getElementById('main'));
