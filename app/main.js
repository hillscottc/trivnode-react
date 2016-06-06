import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import CatsContainer from './components/cats/CatsContainer';

import { Router, Route, hashHistory } from 'react-router'


ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/cats" component={CatsContainer}/>
      </Route>
    </Router>
), document.getElementById('root'));

