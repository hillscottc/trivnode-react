import React, { Component } from 'react'
import styles from './cats.css';
import Cat from './Cat'
import NumForm from '../NumForm'


export default class CatsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numToShow: 5,
      numToShowOptions: ["5", "10", "50"]
    };
  }

  render() {
    const {numToShow, numToShowOptions } = this.state;
    const {cats, changeNumToShow} = this.props;
    return (
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
  }
}

CatsContainer.propTypes = {};
