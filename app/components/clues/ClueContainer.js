import React, { Component, PropTypes } from 'react'
import Clue from './Clue'


export default class ClueContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {correct: false, showAnswer: false};
    this.answerChange = this.answerChange.bind(this);
    this.showAnswerClick = this.showAnswerClick.bind(this);
  }

  static fuzzyMatch(guess, answer){
    if (guess === "") return false;
    if (answer === guess) return true;
    const guess_re = new RegExp(guess, "gi");
    return (guess.length > 3 && guess_re.test(answer));
  }

  answerChange(value) {
    const right = ClueContainer.fuzzyMatch(value, this.props.clue.answer);
    this.setState({correct: right, showAnswer: right});
  }

  showAnswerClick() {
    this.setState({showAnswer: ! this.state.showAnswer});
  }

  render() {
    const { correct, showAnswer } = this.state;
    const { clue } = this.props;

    return (
        <Clue
            clue={clue}
            correct={correct}
            showAnswer={showAnswer}
            showAnswerClick={this.showAnswerClick}
            answerChange={this.answerChange}
        />
    );
  }
}

ClueContainer.propTypes = {
  clue: PropTypes.object.isRequired
};

ClueContainer.defaultProps = {
  clue: {clue_id:1, category:"hist", question:"when", answer:"then"}
};