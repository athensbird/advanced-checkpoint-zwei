import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Favorites extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadWordList();
  }

  render() {
    const listOfWords = this.props.wordList.map(item => {
      return (
        // eslint-disable-next-line
        <div key={item._id}>
          <li>{item.word}</li>
          <Link to={"/favorites/" + item._id}>Detail Page</Link>
        </div>
      );
    });
    return (
      <div>
        <p>Hallo</p>
        <div>{listOfWords}</div>
        <Link to={"/"}>Back</Link>
      </div>
    );
  }
}

Favorites.propTypes = {
  loadWordList: PropTypes.func,
  wordList: PropTypes.array.isRequired
};

export default Favorites;
