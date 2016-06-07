import React from 'react';
import axios from 'axios';
import Header from './components/Header'
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      numToShow: 5
    };
    this.changeNumToShow = this.changeNumToShow.bind(this);

  }

  getCats(numToShow) {
    console.log(`getting ${numToShow} cats.` );
    const _this = this;
    this.serverRequest =
        axios
            .get(`/api/cats/${numToShow}`)
            .then((result) => {
              _this.setState({
                cats: result.data
              });
            })
  }

  componentDidMount() {
    this.getCats(this.state.numToShow);
  }

  changeNumToShow(value) {
    this.setState({numToShow: parseInt(value)});
    this.getCats(parseInt(value));
  }
  
  render() {
    const {cats} = this.state;
    return (
        <div className={styles.app}>
          <Header />
          {this.props.children  && React.cloneElement(this.props.children, {
            cats: cats,
            changeNumToShow: this.changeNumToShow,
            numToShowOptions: ["5", "10", "50"],
            numToShow: 5
          })}
        </div>
    );
  }
}