import React from 'react';
import axios from 'axios';
import SampleButton from './components/SampleButton'
import LikeButton from './components/LikeButton'
import ClueList from './components/ClueList'
import Header from './components/Header'
import styles from './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clues: [], numToShow: 3};
    this.buttonClick = this.buttonClick.bind(this);
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

  buttonClick(value) {
    // this.props.dispatch(selectReddit(nextReddit));
    console.log("Clicked " + value);
  }

  changeNumToShow(value) {
    // this.props.dispatch(selectReddit(nextReddit));
    console.log("Change to " + value);
    this.setState({numToShow: parseInt(value)});
    this.updateClues(parseInt(value));
  }


  render() {
    const {clues, numToShow} = this.state;
    return (
        <div className={styles.app}>
          <Header />
          <ClueList clues={clues}
                    numToShow={numToShow}
                    changeNumToShow={this.changeNumToShow}
                    numToShowOptions={["3", "5", "10", "50"]} />
          <SampleButton value={'Click me.'} onClick={this.buttonClick}/>
          <LikeButton />
        </div>
    );
  }
}