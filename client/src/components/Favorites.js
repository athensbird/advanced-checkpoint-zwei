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
    return (
      <div>
        <p>Hallo</p>
        <Link to={"/"}>Back</Link>
      </div>
    );
  }
}

Favorites.propTypes = {
  loadWordList: PropTypes.func
};

export default Favorites;
