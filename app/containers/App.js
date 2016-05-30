import React from 'react';
import CluesContainer from './CluesContainer'
import Header from '../components/Header'
import styles from './App.css';

require('./bootstrap/min.css');
require('./bootstrap-theme/min.css');


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
        <div className={styles.app}>
          <Header />
          <CluesContainer />
        </div>
    );
  }
}