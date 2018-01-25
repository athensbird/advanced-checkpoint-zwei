import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createUser } from '../actions';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }
  handleUsername(event) {
    this.setState({
      username: event.target.value
    });
  }
  validateCommentForm(e) {
    e.preventDefault();
    let validated = true;
    if (typeof this.state.username !== 'string' || !this.state.username) {
      alert('Invalid username!');
      validated = false;
    }
    if (validated) {this.handleSubmit(e)};
  }
  handleSubmit(e) {
    if (this.props.addUser) {
      this.props.addUser(this.state);
    }
    this.props.toggleCreateUser();
  }
  render() {
    const { addUser, toggleCreateUser } = this.props;
    return (
      <div className="addUser">
        <Form onSubmit={(e) => {
          this.validateCommentForm(e);
        }}>
          <input
            className="add-username-input"
            onChange={this.handleUsername.bind(this)}
            value={this.state.username}
            placeholder="Enter the username" />
          <Button
            className="add-new-user-button"
            onClick={(e) => {this.validateCommentForm(e)}}
          >Create a new user</Button>
        </Form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addUser: (user) => dispatch(createUser(user))
  }
}

export default connect(
  null, mapDispatchToProps
)(CreateUser);
