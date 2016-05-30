import React, { Component, PropTypes } from 'react'
import {Panel, FormGroup, ControlLabel  } from 'react-bootstrap';
import ClueContainer from '../containers/ClueContainer'

const ClueList = ({ clues, numToShow, changeNumToShow, numToShowOptions }) => (
    <Panel>
      <div>
        <form>
          <FormGroup controlId="numToShow">
            <ControlLabel>Num to show</ControlLabel>
            <select onChange={e => changeNumToShow(e.target.value)}
                    value={numToShow}>
              {numToShowOptions.map(option =>
                  <option value={option} key={option}>
                    {option}
                  </option>)
              }
            </select>
          </FormGroup>
        </form>
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
