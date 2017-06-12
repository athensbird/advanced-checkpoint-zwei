import React, {Component} from "react";
import PropTypes from "prop-types";

class CreatePerson extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Alter: 20,
      Gipfel: 175,
      Heimat: ""
    };
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
            onChange={(event) => {
              this.setState({
                name: event.target.value
              });
            }} />
          Alter: <input
            onChange={(event) => {
              this.setState({
                Alter: event.target.value
              });
            }} />
          Gipfel: <imput
            onChange={(event) => {
              this.setState({
                Gipfel: event.target.value
              });
            }} />
          Heimat: <input
            onChange={(event) => {
              this.setState({
                Heimat: event.target.value
              });
            }} />
          <button>Create Person</button>
        </form>
      </div>
    );
  }
}

CreatePerson.propTypes = {
  createPerson: PropTypes.func.isRequired
};

export default CreatePerson;
