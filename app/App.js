import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import styles from './App.css';
import config from '../config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      clues: [],
      numCatsToShow: 10,
      numCluesToShow: 5,
      catsToShowOptions: ["10", "20", "50"],
      cluesToShowOptions: ["5", "10", "50"]
    };

    this.changeNumCatsToShow = this.changeNumCatsToShow.bind(this);
    this.changeNumCluesToShow = this.changeNumCluesToShow.bind(this);
  }

  getCats(numToShow) {
    console.log(`Getting ${numToShow} cats.` );
    const _this = this;
    this.serverRequest =
        axios
            .get(`${config.apiUrl}/trivia/cats/${numToShow}`)
            .then((result) => {
              _this.setState({
                cats: result.data
              });
            })
  }

  getClues(numToShow) {
    console.log(`Getting ${numToShow} clues.`);
    const _this = this;
    this.serverRequest =
        axios
            .get(`${config.apiUrl}/trivia/clues/${numToShow}`)
            .then((result) => {
              _this.setState({
                clues: result.data
              });
            })
  } 

  componentDidMount() {
    this.getCats(this.state.numCatsToShow);
    this.getClues(this.state.numCluesToShow);
  }

  changeNumCatsToShow(value) {
    this.setState({numCatsToShow: parseInt(value)});
    this.getCats(parseInt(value));
  }

  changeNumCluesToShow(value) {
    this.setState({numCluesToShow: parseInt(value)});
    this.getClues(parseInt(value));
  }
  
  render() {
    const {cats, clues, catsToShowOptions, cluesToShowOptions, numCatsToShow, numCluesToShow} = this.state;
    return (
        <div className={styles.app}>
          <Header />
          {this.props.children  && React.cloneElement(this.props.children, {
            cats: cats,
            clues: clues,
            catsToShowOptions: catsToShowOptions,
            cluesToShowOptions: cluesToShowOptions,
            numCatsToShow: numCatsToShow,
            numCluesToShow: numCluesToShow,
            changeNumCatsToShow: this.changeNumCatsToShow,
            changeNumCluesToShow: this.changeNumCluesToShow
          })}
        </div>
    );
  }
}