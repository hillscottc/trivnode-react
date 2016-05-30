import React from 'react';
import SampleButton from '../components/SampleButton'
import LikeButton from '../components/LikeButton'
import CluesContainer from './CluesContainer'
import Header from '../components/Header'
import styles from './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonClick = this.buttonClick.bind(this);

  }

  buttonClick(value) {
    // this.props.dispatch(selectReddit(nextReddit));
    console.log("Clicked " + value);
  }

  render() {
    return (
        <div className={styles.app}>
          <Header />
          <CluesContainer />
          <SampleButton value={'Click me.'} onClick={this.buttonClick} />
          <LikeButton />
        </div>
    );
  }
}