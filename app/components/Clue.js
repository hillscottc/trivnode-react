import React from 'react'
import { Button, Panel, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

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
    // this.toggleClue = this.toggleClue.bind(this);
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

  // toggleClue() {
  //   this.setState({isActive: !this.state.isActive});
  //   this.refs.answerSection.style.visibility = "visible";
  // }

  render() {
    const {clue, correct, showAnswer, isActive} = this.state;
    
    // const activeClass = isActive ? styles.active : styles.inactive;

    return (
        <Panel >
          <div>
            <span>{clue.category}</span>
          </div>
          <div>
            <label>Q:</label>
            <span>{clue.question}</span>
          </div>
          <form>
            <FormGroup controlId={clue.clue_id + '_answer'}>
              <FormControl
                  ref="answer"
                  type="text"
                  value={this.state.value}
                  placeholder="Your answer..."
                  onChange={e => this.answerChange(e.target.value)}
              />
              <span> {correct ? "Right!!" : ""}</span>
            </FormGroup>
          </form>
          <Button bsStyle="success" bsSize="small" onClick={this.showAnswer}>
            Tell Me
          </Button>
          <span> {showAnswer ? clue.answer : ''}</span>
        </Panel>
    );
  }
}
