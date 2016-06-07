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

  getData(numToShow) {
    console.log("getting cats (App)", numToShow );
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
    this.getData(this.state.numToShow);
  }

  changeNumToShow(value) {
    this.setState({numToShow: parseInt(value)});
    this.getData(parseInt(value));
  }
  
  render() {
    const {cats} = this.state;
    return (
        <div className={styles.app}>
          <Header />
          {this.props.children  && React.cloneElement(this.props.children, {
            cats: cats,
            changeNumToShow:this.changeNumToShow
          })}
        </div>
    );
  }
}