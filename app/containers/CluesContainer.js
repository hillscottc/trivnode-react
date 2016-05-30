import React, { PropTypes } from 'react'
import axios from 'axios';
import { Panel } from 'react-bootstrap';
import ClueContainer from './ClueContainer'
import NumForm from '../components/NumForm'


export default class CluesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clues: [], 
      numToShow: 3,
      numToShowOptions: ["3", "5", "10", "50"]
    };
    this.changeNumToShow = this.changeNumToShow.bind(this);
  }

  updateClues(numToShow) {
    console.log("getting clues", numToShow );
    const _this = this;
    this.serverRequest =
        axios
            .get(`/api/clues/${numToShow}`)
            .then(function(result) {
              _this.setState({
                clues: result.data
              });
            })
  }

  componentDidMount() {
    this.updateClues(this.state.numToShow);
  }

  changeNumToShow(value) {
    // this.props.dispatch(selectReddit(nextReddit));
    this.setState({numToShow: parseInt(value)});
    this.updateClues(parseInt(value));
  }

  render() {
    const {clues, numToShow, numToShowOptions} = this.state;
    return (
        <Panel>
          <div>
            <NumForm
                numToShow={numToShow}
                changeNumToShow={this.changeNumToShow}
                numToShowOptions={numToShowOptions}
            />
          </div>
          <div>
            {clues.map((clue) =>
                <ClueContainer key={clue.clue_id} clue={clue} />
            )}
          </div>
        </Panel>
    );
  }
}

CluesContainer.propTypes = {};
