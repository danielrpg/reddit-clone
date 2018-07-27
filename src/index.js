import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router';
import registerServiceWorker from './utils/registerServiceWorker'
import Routes from "./routers";

ReactDOM.render(
    <Routes history={ browserHistory }/>,
    document.getElementById('root'));
registerServiceWorker();
