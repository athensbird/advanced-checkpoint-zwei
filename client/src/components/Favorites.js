import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {ListGroup, ListGroupItem, Jumbotron} from "react-bootstrap";

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
          <ListGroup>
            <ListGroupItem>
              <Link
                to={"/favorites/" + item._id}>
                {item.word}</Link>
            </ListGroupItem>
          </ListGroup>
        </div>
      );
    });
    return (
      <div>
        <Jumbotron>Hallo, click on the word to learn the details!</Jumbotron>
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
