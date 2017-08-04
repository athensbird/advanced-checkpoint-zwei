import React, {Component} from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {Form, FormControl, Button, Jumbotron} from "react-bootstrap";
import "../App.css";

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
  submitWord(e) {
    e.preventDefault();
    if (this.props.lookUp) {
      this.props.lookUp(this.state.searchText);
    }
  }
  render() {
    return (
      <div>
        <Form inline onSubmit={e => this.submitWord(e)}>
          <div className="dictionary-form">
            <FormControl
              className="searchBox"
              name="Search"
              type="text"
              value={this.state.searchText}
              placeholder="Type a word and enter!"
              onChange={(event) => this.searchHandler(event)}
            />
            <br />
          </div>
        </Form>
        <Jumbotron>
          <p>{this.props.word}</p>
        </Jumbotron>
        <div className="dictionary-form">
          <Button bsStyle="success" onClick={e => {
            e.preventDefault();
            const wordArray = {
              word: this.state.searchText,
              definition: this.props.word,
              repeatedTimes: 0,
              masterLevel: 1
            };
            this.props.addToFavorites(wordArray);
          }}>Add to Favorites</Button>
          <Button bsStyle="warning" onClick={e => {
            e.preventDefault();
            this.props.clearWord();
            this.setState({
              searchText: ""
            });
          }}>Clear</Button>
          <br />
        </div>
        <Button bsStyle="default">
          <NavLink className="back" to={"/"}>Back</NavLink>
        </Button>
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
