import React, { PropTypes } from 'react'
import Clue from '../components/Clue'

function fuzzyMatch(guess, answer){
  if (guess === "") return false;
  if (answer === guess) return true;
  const guess_re = new RegExp(guess, "gi");
  return (guess.length > 3 && guess_re.test(answer));
}

export default class ClueContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {correct: false, showAnswer: false};
    this.answerChange = this.answerChange.bind(this);
    this.showAnswerClick = this.showAnswerClick.bind(this);
  }

  answerChange(value) {
    const right = fuzzyMatch(value, this.props.clue.answer);
    this.setState({correct: right, showAnswer: right});
  }

  showAnswerClick() {
    this.setState({showAnswer: true});
  }

  render() {
    const { correct, showAnswer } = this.state;
    const { clue } = this.props;

    return (
        <Clue
            clue_id={clue.clue_id}
            category={clue.category}
            question={clue.question}
            answer={clue.answer}
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
