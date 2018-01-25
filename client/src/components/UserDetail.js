import React, {Component} from "react";
import CreateUser from './CreateUser';
import PropTypes from "prop-types";
import DetailDisplay from "./DetailDisplay";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      createUserOpen: false
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
  toggleCreateUser() {
    this.setState({
      createUserOpen: !this.state.createUserOpen
    })
  }
  render() {
    // eslint-disable-next-line
    const currentUser = this.props.user[0];
    return (
      <div>
        <Button
          className="add-comment-button"
          onClick={() => this.toggleCreateUser()}>{this.state.createUserOpen ? <p>Close</p> : <p>Add a user</p>}
        </Button>
        {this.state.createUserOpen && <CreateUser toggleCreateUser={() => this.toggleCreateUser()}/>}
        <div className="user-detail">
          {currentUser ? <DetailDisplay
            user={currentUser}
            handleUsername={(username) => this.registerUsername(username)}
             /> :
          <p>Loading the data, please wait...</p>}
          <Button><Link to="/">Back</Link></Button>
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
