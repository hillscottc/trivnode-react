import React from 'react'
import styles from './Clue.css';


export default class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clue: props.clue, correct: "No", showAnswer: false};
    this.answerChange = this.answerChange.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  answerChange(value) {
    const isCorrect = this.fuzzyMatch(value) ? "Yes" : "No";

    // this does not seem to be causing a re-render,
    // so i have to use the refs to force updtae. why?
    this.setState({correct: isCorrect});

    // this.refs.results.innerHTML = isCorrect;
  }

  fuzzyMatch(guess){
    const answer = this.state.clue.answer;

    if (guess === "") return false;
    if (answer === guess) return true;

    const guess_re = new RegExp(guess, "gi");

    if (guess.length > 3 && guess_re.test(answer)) {
      return true;
    } else {
      return false;
    }
  }

  showAnswer() {
    this.setState({showAnswer: true});
  }

  checkAnswer() {
    // const isCorrect = this.fuzzyMatch(value);
    // console.log("Check answer " + isCorrect);
    // this.setState({correct: isCorrect});
    this.setState({correct: "Yes"});
  }

  render() {
    // const clue = this.state.clue;
    const {clue, correct, showAnswer} = this.state;
    const answerText = showAnswer ? clue.answer : '';

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
          </div>
          <button type="button" onClick={this.showAnswer}>Tell me</button>
          <span>{answerText}</span>

          <button type="button" onClick={this.checkAnswer}>Check answer</button>
          <span>Correct?...{correct}</span>


          <p>
            {correct}
          </p>

        </div>
    );
  }
}
