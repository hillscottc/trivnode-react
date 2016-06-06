import React, { Component } from 'react'
import axios from 'axios';
import styles from './clues.css';
import ClueContainer from './ClueContainer'
import NumForm from '../NumForm'


export default class CluesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clues: [], 
      numToShow: 3,
      numToShowOptions: ["3", "5", "10", "50"]
    };
    this.changeNumToShow = this.changeNumToShow.bind(this);
  }

  getData(numToShow) {
    console.log("getting clues", numToShow );
    const _this = this;
    this.serverRequest =
        axios
            .get(`/api/clues/${numToShow}`)
            .then((result) => {
              _this.setState({
                clues: result.data
              });
            })
  }

  componentDidMount() {
    this.getData(this.state.numToShow);
  }

  changeNumToShow(value) {
    this.setState({numToShow: parseInt(value)});
    this.getData(parseInt(value));
  }

  render() {
    const {clues, numToShow, numToShowOptions} = this.state;
    return (
        <div className={styles.clueList}>
          <header>
            <span>Random Clues</span>
            <nav>
              <NumForm
                  numToShow={numToShow}
                  changeNumToShow={this.changeNumToShow}
                  numToShowOptions={numToShowOptions} />
            </nav>
          </header>
          <div>
            {clues.map((clue) =>
                <ClueContainer key={clue.clue_id} clue={clue} />
            )}
          </div>
        </div>
    );
  }
}

CluesContainer.propTypes = {};
