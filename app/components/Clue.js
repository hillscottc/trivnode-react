import React , {PropTypes }  from 'react'
import { Button, Panel, FormGroup, FormControl } from 'react-bootstrap';


const Clue = ({
    clue,
    correct,
    showAnswer,
    showAnswerClick,
    answerChange
}) => (
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
      <span> {showAnswer ? clue.answer : ''}</span>
    </Panel>
);


Clue.propTypes = {
  clue: PropTypes.object.isRequired,
  correct: PropTypes.bool.isRequired,
  showAnswer: PropTypes.bool.isRequired,
  showAnswerClick: PropTypes.func.isRequired,
  answerChange: PropTypes.func.isRequired
};

Clue.defaultProps = {
  clue: {clue_id:1, category:"hist", question:"when", answer:"then"},
  correct: false,
  showAnswer: false,
  showAnswerClick: (()  => {}),
  answerChange: (()  => {})
};

export default Clue;


