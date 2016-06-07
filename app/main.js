import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import CatsContainer from './components/cats/CatsContainer';
import CluesContainer from './components/clues/CluesContainer';
import CluesByCatContainer from './components/clues/CluesByCatContainer';
import About from './components/About';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'


ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>

        <IndexRoute component={CatsContainer}/>

        <Route path="/cats" component={CatsContainer}/>
        <Route path="/clues" component={CluesContainer}/>
        <Route path="/cat/:cat_id/clues" component={CluesByCatContainer}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
), document.getElementById('root'));

