import React, {Component} from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

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
          <p>{this.props.word}</p>
        </form>
      </div>
    );
  }
}

Dictionary.propTypes = {
  lookUp: PropTypes.func.isRequired,
  word: PropTypes.string
};

export default Dictionary;
