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
          <table>
            <thead>
              <tr>
                <th>Word</th>
                <th>Definiton</th>
                <th>Repeated Times</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.word}</td>
                <td>{item.definition}</td>
                <td>{item.repeatedTimes}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });
    return (
      <div>
        <p>Hallo</p>
        <displayList list={this.props.wordList} />
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
