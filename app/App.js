import React from 'react';
import Button from './components/Button'
import LikeButton from './components/LikeButton'
import ClueList from './components/ClueList'
import styles from './App.css';

const someClues = [
  {"id":1, "category": "philosophy", "question": "why", "answer": "because"},
  {"id":2, "category": "history", "question": "when", "answer": "then"}
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(value) {
    // this.props.dispatch(selectReddit(nextReddit));
    console.log("Clicked " + value);
  }

  render() {
    return (
        <div className={styles.app}>
          <a href="/api/clues">clues api</a>
          <ClueList clues={someClues} />
          <div>
          </div>
          <Button value={'Click me.'} onClick={this.buttonClick}/>
          <LikeButton />
        </div>
    );
  }
}