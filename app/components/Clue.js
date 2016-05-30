import React , {PropTypes }  from 'react'


const Clue = ({
    clue,
    correct,
    showAnswer,
    showAnswerClick,
    answerChange
}) => (
    <div >
      <div>
        <span>{clue.category}</span>
      </div>
      <div>
        <label>Q:</label>
        <span>{clue.question}</span>
      </div>
      <form>
        <input type="text"
               placeholder="Your answer..."
               onChange={e => answerChange(e.target.value)} />
          <span> {correct ? "Right!!" : ""}</span>
      </form>
      <button type="button" onClick={showAnswerClick}>Tell Me</button>
      <span> {showAnswer ? clue.answer : ''}</span>
    </div>
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
  showAnswerClick: (()  => {console.log("Click!")}),
  answerChange: (()  => {console.log("Click!")})
};

export default Clue;


