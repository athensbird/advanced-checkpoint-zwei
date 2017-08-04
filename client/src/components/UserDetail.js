import React, {Component} from "react";
import PropTypes from "prop-types";
import DetailDisplay from "./DetailDisplay";
import {Link} from "react-router-dom";

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
  registerUsername(username) {
    if (this.props.handleUpperUsername) {
      this.props.handleUpperUsername(username);
    }
  }
  render() {
    // eslint-disable-next-line
    const currentUser = this.props.user[0];
    return (
      <div>
        <div className="user-detail">
          {currentUser ? <DetailDisplay
            user={currentUser}
            handleUsername={(username) => this.registerUsername(username)}
             /> :
          <p>Loading the data, please wait...</p>}
          <Link to="/">Back</Link>
        </div>
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
  handleUpperUsername: PropTypes.func
};

export default UserDetail;
