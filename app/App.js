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

  componentDidMount() {

    const {numToShow} = this.state;

    var _this = this;

    this.serverRequest =
        axios
            .get(`/api/clues/${numToShow}`)
            .then(function(result) {
              _this.setState({
                clues: result.data
              });
            })
  }

  buttonClick(value) {
    // this.props.dispatch(selectReddit(nextReddit));
    console.log("Clicked " + value);
  }

  changeNumToShow(value) {
    // this.props.dispatch(selectReddit(nextReddit));
    console.log("Change to " + value);
    this.setState({numToShow: parseInt(value)});
  }


  render() {
    const {clues, numToShow} = this.state;
    return (
        <div className={styles.app}>
          <Header />
          <ClueList clues={clues}
                    numToShow={numToShow}
                    changeNumToShow={this.changeNumToShow}
                    numToShowOptions={["5","10"]} />
          <SampleButton value={'Click me.'} onClick={this.buttonClick}/>
          <LikeButton />
        </div>
    );
  }
}