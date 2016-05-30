import React, { PropTypes }  from 'react'
import { FormGroup, ControlLabel } from 'react-bootstrap';


const NumForm = ({ numToShow, changeNumToShow, numToShowOptions }) => (
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
);

NumForm.propTypes = {
  numToShow: PropTypes.number.isRequired,
  changeNumToShow: PropTypes.func.isRequired,
  numToShowOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default NumForm;


