import React , {PropTypes }  from 'react'
import styles from './clues.css';


const Clue = ({
    clue,
    correct,
    showAnswer,
    showAnswerClick,
    answerChange
}) => (
    <div className={styles.clue}>
      <div className={styles.category}>
        <span>{clue.category}</span>
      </div>
      <div className={styles.question}>
        <span>
          {clue.question.split("<br />").map((line, index) =>
              <p key={index}>{line}</p>
          )}
        </span>
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
  clue: {clue_id:1, category:"history", question:"when", answer:"then"},
  correct: false,
  showAnswer: false,
  showAnswerClick: (()  => {console.log("Click!")}),
  answerChange: (()  => {console.log("Click!")})
};

export default Clue;


