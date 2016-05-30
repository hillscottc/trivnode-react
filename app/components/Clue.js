import React , {PropTypes }  from 'react'
import { Button, Panel, FormGroup, FormControl } from 'react-bootstrap';


const Clue = ({
    clue_id,
    category,
    question,
    answer,
    correct,
    showAnswer,
    showAnswerClick,
    answerChange
}) => (
    <Panel >
      <div>
        <span>{category}</span>
      </div>
      <div>
        <label>Q:</label>
        <span>{question}</span>
      </div>
      <form>
        <FormGroup controlId={clue_id + '_answer'}>
          <FormControl
              type="text"
              placeholder="Your answer..."
              onChange={e => answerChange(e.target.value)}
          />
          <span> {correct ? "Right!!" : ""}</span>
        </FormGroup>
      </form>
      <Button bsStyle="success" bsSize="small" onClick={showAnswerClick}>
        Tell Me
      </Button>
      <span> {showAnswer ? answer : ''}</span>
    </Panel>
);

Clue.propTypes = {
  clue_id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  showAnswerClick: PropTypes.func.isRequired,
  answerChange: PropTypes.func.isRequired
};

export default Clue;


