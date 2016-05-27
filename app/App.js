import React from 'react';
import axios from 'axios';
import Button from './components/Button'
import LikeButton from './components/LikeButton'
import ClueList from './components/ClueList'
import styles from './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clues: []};
    this.buttonClick = this.buttonClick.bind(this);
  }

  componentDidMount() {
    var _this = this;

    this.serverRequest =
        axios
            .get("/api/clues")
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

  render() {
    const {clues} = this.state;
    return (
        <div className={styles.app}>
          <a href="/api/clues">clues api</a>
          <ClueList clues={clues} />
          <div>
          </div>
          <Button value={'Click me.'} onClick={this.buttonClick}/>
          <LikeButton />
        </div>
    );
  }
}