import React from 'react'
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

// Clue.propTypes = {
//   clue: React.PropTypes.instanceOf(Clue)???
//   value: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired
// };

export default Clue;


