import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'antd/dist/antd.css';
// import './styles/reset.scss';
import './styles/base.scss';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
