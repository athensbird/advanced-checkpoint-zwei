import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class CreatePeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Alter: 20,
      Große: 175,
      Heimat: "",
      created: false
    };
  }

  handleHeimat(event) {
    this.setState({
      Heimat: event.target.value
    });
  }

  handleName(event) {
    this.setState({
      Name: event.target.value
    });
  }

  handleAlter(event) {
    this.setState({
      Alter: event.target.value
    });
  }

  handleGroße(event) {
    this.setState({
      Große: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if (this.props.createPerson) {
            this.props.createPerson(this.state);
          }
        }}>
          Name: <input
            onChange={this.handleName.bind(this)}
            value={this.state.Name}
            placeholder="Enter your name" />
          <br />
          Alter: <input
            onChange={this.handleAlter.bind(this)}
            value={this.state.Alter}
            placeholder="Enter your age" />
          <br />
          Große: <input
            onChange={this.handleGroße.bind(this)}
            value={this.state.Große}
            placeholder="Enter your height" />
          <br />
          Heimat:
          <input
            onChange={this.handleHeimat.bind(this)}
            placeholder="Enter your hometown"
            value={this.state.Heimat}
          />
          <br />
          <button>Create Person</button>
        </form>
        <div>{this.state.message}</div>
        <Link to={"/list/"}>Back to List</Link>
      </div>
    );
  }
}

CreatePeople.propTypes = {
  createPerson: PropTypes.func.isRequired
};

export default CreatePeople;
