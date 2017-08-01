import React, {Component} from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

class DetailDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  storeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  handleUsername(e) {
    e.preventDefault();
    this.props.handleUsername(this.state);
  }
  render() {
    return (
      <div>
        <form>
          <p>Setup your username</p>
          <input
            onChange={this.storeUsername.bind(this)}
            placeholder="Enter your new username"
          />
          <button onClick={e => this.handleUsername(e)}>Submit</button>
          <p>Your Level: {this.props.user.level}</p>
          <p>You have played {this.props.user.gamesPlayed} games</p>
        </form>
      </div>
    );
  }
}

DetailDisplay.propTypes = {
  user: PropTypes.object,
  level: PropTypes.number,
  gamesPlayed: PropTypes.number,
  handleUsername: PropTypes.func
};


export default DetailDisplay;
