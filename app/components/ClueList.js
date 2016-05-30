import React, { PropTypes } from 'react'
import { Panel } from 'react-bootstrap';
import ClueContainer from '../containers/ClueContainer'
import NumForm from '../components/NumForm'








const ClueList = ({ clues, numToShow, changeNumToShow, numToShowOptions }) => (
    <Panel>
      <div>
        <NumForm
            numToShow={numToShow}
            changeNumToShow={changeNumToShow}
            numToShowOptions={numToShowOptions}
        />
      </div>
      <div>
        {clues.map((clue) =>
            <ClueContainer 
                key={clue.clue_id}
                clue_id={clue.clue_id}
                category={clue.category} 
                question={clue.question} 
                answer={clue.answer} 
            />
        )}
      </div>
    </Panel>
);

ClueList.propTypes = {
  clues: PropTypes.array.isRequired,
  numToShow: PropTypes.number.isRequired,
  changeNumToShow: PropTypes.func.isRequired,
  numToShowOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ClueList;





