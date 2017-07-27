import React, {Component} from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      definition: ""
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
        <input
          className="searchBox"
          name="Search"
          type="text"
          value={this.state.searchText}
          onChange={(event) => this.searchHandler(event)}
        />
        <button onClick={this.props.lookUp(this.state.searchText)}>Submit</button>
        <p>{this.state.definition}</p>
      </div>
    );
  }
}

Dictionary.propTypes = {
  lookUp: PropTypes.func.isRequired
};

export default Dictionary;
