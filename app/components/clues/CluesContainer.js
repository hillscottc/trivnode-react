import React, { Component, PropTypes } from 'react'
import styles from './clues.css';
import ClueContainer from './ClueContainer'
import NumForm from '../NumForm'


const CluesContainer = ({clues, changeNumCluesToShow, numCluesToShow, cluesToShowOptions }) => (
    <div className={styles.clueList}>
      <header>
        <span>Random Clues</span>
        <nav>
          <NumForm
              numToShow={numCluesToShow}
              changeNumToShow={changeNumCluesToShow}
              numToShowOptions={cluesToShowOptions} />
        </nav>
      </header>
      <div>
        {clues.map((clue) =>
            <ClueContainer key={clue.clue_id} clue={clue} />
        )}
      </div>
    </div>
);

export default CluesContainer;


CluesContainer.propTypes = {
  clues: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  changeNumCluesToShow: PropTypes.func.isRequired,
  cluesToShowOptions: PropTypes.arrayOf(React.PropTypes.string).isRequired,
  numCluesToShow: PropTypes.number
};


CluesContainer.defaultProps = {
  clues: [{clue_id: 1, category: "history", question: "when", answer: "then"}],
  changeNumCluesToShow: (()  => {console.log("Change!")}),
  cluesToShowOptions: ["5", "10", "50"],
  numCluesToShow: 5
};

