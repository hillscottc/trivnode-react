import React from 'react';
import Header from './components/Header'
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
        <div className={styles.app}>
          <Header />
          {this.props.children}
        </div>
    );
  }
}