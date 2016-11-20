import React, { Component } from 'react'
import axios from 'axios';
import styles from './clues.css';
import ClueContainer from './ClueContainer'
import config from '../../../config';


export default class CluesByCatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cat_id: props.params.cat_id ? props.params.cat_id : 807,
      clues: []
    };
  }

  getData(cat_id) {
    console.log("getting clues by cat ", cat_id );
    const _this = this;
    this.serverRequest =
        axios
            .get(`${config.apiUrl}/trivia/clues/cat/${cat_id}`)
            .then((result) => {
              _this.setState({
                clues: result.data
              });
            })
  }

  componentDidMount() {
    this.getData(this.state.cat_id);
  }


  render() {
    const { clues } = this.state;
    return (
        <div className={styles.clueList}>
          <header>
            <span>Clues By Category</span>
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

CluesByCatContainer.propTypes = {};
