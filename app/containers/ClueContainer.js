import React from 'react'
import Clue from '../components/Clue'

export default class ClueContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clue: props.clue,
      correct: false,
      showAnswer: false};
    this.answerChange = this.answerChange.bind(this);
    this.showAnswerClick = this.showAnswerClick.bind(this);
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

  showAnswerClick() {
    this.setState({showAnswer: true});
  }

  render() {
    const {clue, correct, showAnswer} = this.state;

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
