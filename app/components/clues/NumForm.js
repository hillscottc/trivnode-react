import React, { PropTypes }  from 'react'
import styles from './clues.css';


const NumForm = ({ numToShow, changeNumToShow, numToShowOptions }) => (
    <form className={styles.numForm}>
      <label>Num to show</label>
      <select onChange={e => changeNumToShow(e.target.value)}
              value={numToShow}>
        {numToShowOptions.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
        }
      </select>
    </form>
);

NumForm.propTypes = {
  numToShow: PropTypes.number.isRequired,
  changeNumToShow: PropTypes.func.isRequired,
  numToShowOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

NumForm.defaultProps = {
  numToShow: 3,
  changeNumToShow: (()  => {console.log("Click!")}),
  numToShowOptions: ["3", "5"]
};

export default NumForm;


