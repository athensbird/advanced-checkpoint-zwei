import React, {Component} from "react";
import PropTypes from "prop-types";
import {Jumbotron, Button, Table} from "react-bootstrap";
// import {Link} from "react-router-dom";
import UsernameReset from "./UsernameReset";
// import {Link} from "react-router-dom";

class DetailDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      reset: false
    };
  }
  toggleReset(e) {
    e.preventDefault();
    this.setState({
      reset: true
    });
  }
  storeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  handleUsername(e) {
    e.preventDefault();
    this.setState({
      reset: false
    });
    this.props.handleUsername(this.state);
  }
  render() {
    return (
      <div>
        <Jumbotron className="user-info">
          <Table striped condensed responsive>
            <thead>
              <tr>
                <th>Your username</th>
                <th>Your Level</th>
                <th>Games Played</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.level}</td>
                <td>{this.props.user.gamesPlayed}</td>
              </tr>
            </tbody>
          </Table>
          <div>
            {!this.state.reset ?
              <Button onClick={e => this.toggleReset(e)}>Reset Username</Button> :
              <UsernameReset
                handleUsername={e => this.handleUsername(e)}
                storeUsername={e => this.storeUsername(e)}
              />}
          </div>
        </Jumbotron>
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
