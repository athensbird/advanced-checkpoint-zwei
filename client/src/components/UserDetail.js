import React, {Component} from "react";
import PropTypes from "prop-types";
import DetailDisplay from "./DetailDisplay";
// import {Link} from "react-router-dom";

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    this.props.loadUser();
  }
  handleUserLoaded() {
    this.setState({
      loading: false
    });
  }
  render() {
    // eslint-disable-next-line
    const currentUser = this.props.user[0];
    return (
      <div>
        {currentUser ? <p>Status:Ready </p> : <p>Status:Processing </p>}
        {currentUser ? <DetailDisplay user={currentUser} /> :
        <p>Loading the data, please wait...</p>}
      </div>
    );
  }
}

/*
<input
  onChange={this.props.handleUsername.bind(this)}
  placeholder="Enter your new username"
/>
*/

UserDetail.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  level: PropTypes.number,
  gamesPlayed: PropTypes.number,
  loadUser: PropTypes.func,
  handleUsername: PropTypes.func
};

export default UserDetail;
