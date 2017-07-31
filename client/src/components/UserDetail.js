import React, {Component} from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

class UserDetail extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.loadUser();
  }
  render() {
    return (
      <div>
        <form>
          <p>Setup your username</p>
          <button>Submit</button>
          <p>Your Level: {this.props.user.level}</p>
          <p>You have played {this.props.user.gamesPlayed} games</p>
        </form>
      </div>
    );
  }
}

UserDetail.propTypes = {
  user: PropTypes.object,
  level: PropTypes.number,
  gamesPlayed: PropTypes.number,
  loadUser: PropTypes.func
};

export default UserDetail;
