import React, { Component, PropTypes } from 'react'
import styles from './cats.css';
import Cat from './Cat'
import NumForm from '../NumForm'


const CatsContainer = ({cats, changeNumToShow, numToShow, numToShowOptions }) => (
    <div className={styles.catList}>
      <header>
        <span>Random Categories</span>
        <nav>
          <NumForm
              numToShow={numToShow}
              numToShowOptions={numToShowOptions}
              changeNumToShow={changeNumToShow}
          />
        </nav>
      </header>
      <div>
        {cats.map((cat) =>
            <Cat key={cat.category_id} cat={cat} />
        )}
      </div>
    </div>
);

export default CatsContainer;


CatsContainer.propTypes = {
  cats: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  changeNumToShow: PropTypes.func.isRequired
};


CatsContainer.defaultProps = {
  cats: [{category_id: 1, category_name: "history"}, {category_id: 2, category_name: "math"}],
  changeNumToShow: (()  => {console.log("Change!")})
};
