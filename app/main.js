import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ReactGA from 'react-ga';
import App from './App.js';
import CatsContainer from './components/cats/CatsContainer';
import CluesContainer from './components/clues/CluesContainer';
import CluesByCatContainer from './components/clues/CluesByCatContainer';
import About from './components/About';
import config from '../config'

console.log("init ga-id: ", config.ga_id);

function logPageView() {
  if (config.ga_id) {
    ReactGA.set({page: window.location.pathname});
    ReactGA.pageview(window.location.pathname);
  }
}

if (config.ga_id) {
  ReactGA.initialize(config.ga_id);
}

ReactDOM.render((
    <Router history={browserHistory} onUpdate={logPageView}>
      <Route path="/" component={App}>

        <IndexRoute component={CatsContainer}/>

        <Route path="/cats" component={CatsContainer}/>
        <Route path="/clues" component={CluesContainer}/>
        <Route path="/cat/:cat_id/clues" component={CluesByCatContainer}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
), document.getElementById('root'));

