import React from 'react'
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
    this.state = {
      clue_id: props.clue_id,
      category: props.category,
      question: props.question,
      answer: props.answer,
      correct: false,
      showAnswer: false};
    this.answerChange = this.answerChange.bind(this);
    this.showAnswerClick = this.showAnswerClick.bind(this);
  }

  answerChange(value) {
    const right = fuzzyMatch(value, this.state.answer);
    this.setState({correct: right, showAnswer: right});
  }

  showAnswerClick() {
    this.setState({showAnswer: true});
  }

  render() {
    const {
        clue_id,
        category,
        question,
        answer,
        correct,
        showAnswer
    } = this.state;

    return (
        <Clue
            clue_id={clue_id}
            category={category}
            question={question}
            answer={answer}
            correct={correct}
            showAnswer={showAnswer}
            showAnswerClick={this.showAnswerClick}
            answerChange={this.answerChange}
        />
    );
  }
}
