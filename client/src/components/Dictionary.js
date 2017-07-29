import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  searchHandler(event) {
    this.setState({
      searchText: event.target.value
    });
  }
  componentDidMount() {
    // load the word list every time the component mounts
    this.props.loadWordList();
  }
  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (this.props.lookUp) {
            this.props.lookUp(this.state.searchText);
          }
        }}>
          <input
            className="searchBox"
            name="Search"
            type="text"
            value={this.state.searchText}
            onChange={(event) => this.searchHandler(event)}
          />
          <button>Submit</button>
          <br />
          <p>{this.props.word}</p>
        </form>
        <button onClick={e => {
          e.preventDefault();
          const wordArray = {
            word: this.state.searchText,
            definition: this.props.word,
            repeatedTimes: 0,
            masterLevel: 1
          };
          this.props.addToFavorites(wordArray);
        }}>Add to Favorites</button>
        <button onClick={e => {
          e.preventDefault();
          this.props.clearWord();
          this.setState({
            searchText: ""
          });
        }}>Clear</button>
        <br />
        <Link to={"/"}>Back</Link>
      </div>
    );
  }
}

Dictionary.propTypes = {
  lookUp: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func,
  loadWordList: PropTypes.func,
  clearWord: PropTypes.func,
  word: PropTypes.string
};

export default Dictionary;
