import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import * as serviceWorker from './serviceWorker';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "jquery";



ReactDOM.render(<Navbar />, document.getElementById('navBar'));


serviceWorker.unregister();
