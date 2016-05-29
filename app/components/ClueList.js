import React, { Component, PropTypes } from 'react'
import { Button, Panel, FormGroup, FormControl, ControlLabel  } from 'react-bootstrap';
import Clue from './Clue'

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
            <Clue key={clue.clue_id}
                  clue={clue} />
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
