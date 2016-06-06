import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import CatsContainer from './components/cats/CatsContainer';
import CluesContainer from './components/clues/CluesContainer';

import { Router, Route, hashHistory } from 'react-router'


ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/cats" component={CatsContainer}/>
        <Route path="/clues" component={CluesContainer}/>
      </Route>
    </Router>
), document.getElementById('root'));

