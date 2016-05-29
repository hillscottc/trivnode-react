import React from 'react'
import styles from './Clue.css';
import { Button } from 'react-bootstrap';

export default class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clue: props.clue,
      correct: false,
      showAnswer: false,
      isActive: false
    };
    this.answerChange = this.answerChange.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
    this.toggleClue = this.toggleClue.bind(this);
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

  toggleClue() {
    this.setState({isActive: !this.state.isActive});
    this.refs.answerSection.style.visibility = "visible";
  }

  render() {
    const {clue, correct, showAnswer, isActive} = this.state;
    
    const activeClass = isActive ? styles.active : styles.inactive;

    return (
        <div className={activeClass} onClick={this.toggleClue}>
          <div>
            <span>{clue.category}</span>
          </div>
          <div>
            <label>Q:</label>
            <span>{clue.question}</span>
          </div>
          <div className={styles.answerSection} ref="answerSection">
            <label>A:</label>
            <input type="text" ref="answer"
                   onChange={e => this.answerChange(e.target.value)} />
            <span> {correct ? "Right!!" : ""}</span>
            <Button bsStyle="success" bsSize="small" onClick={this.showAnswer}>
              Tell Me
            </Button>
            <span> {showAnswer ? clue.answer : ''}</span>
          </div>
         </div>
    );
  }
}
