import React from 'react'
import styles from './Clue.css';

export default class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clue: props.clue, correct: false, showAnswer: false};
    this.answerChange = this.answerChange.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
  }

  answerChange(value) {
    const right = this.fuzzyMatch(value);
    this.setState({correct: right, showAnswer: right});
  }

  fuzzyMatch(guess){
    const answer = this.state.clue.answer;

    if (guess === "") return false;
    if (answer === guess) return true;

    const guess_re = new RegExp(guess, "gi");

    return (guess.length > 3 && guess_re.test(answer));
  }

  showAnswer() {
    this.setState({showAnswer: true});
  }

  render() {
    const {clue, correct, showAnswer} = this.state;

    return (
        <div className={styles.clue}>
          <div>
            <span>{clue.category}</span>
          </div>
          <div>
            <label>Q:</label>
            <span>{clue.question}</span>
          </div>
          <div>
            <label>A:</label>
            <input type="text" ref="answer"
                   onChange={e => this.answerChange(e.target.value)} />
            <span> {correct ? "Right!!" : ""}</span>
          </div>
          <div>
            <button type="button" onClick={this.showAnswer}>Tell me</button>
            <span> {showAnswer ? clue.answer : ''}</span>
          </div>
        </div>
    );
  }
}
