import React, { Component } from 'react'
import axios from 'axios';
import styles from './cats.css';
import Cat from './Cat'
import NumForm from '../NumForm'


export default class CatsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      numToShow: 5,
      numToShowOptions: ["5", "10", "50"]
    };
    this.changeNumToShow = this.changeNumToShow.bind(this);
  }

  getData(numToShow) {
    console.log("getting cats", numToShow );
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
    const {cats, numToShow, numToShowOptions} = this.state;

    return (
        <div className={styles.catList}>
          <header>
            <span>Random Categories</span>
            <nav>
              <NumForm
                  numToShow={numToShow}
                  changeNumToShow={this.changeNumToShow}
                  numToShowOptions={numToShowOptions} />
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
