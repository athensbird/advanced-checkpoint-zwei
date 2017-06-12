import React, {Component} from "react";
import PropTypes from "prop-types";

class CreatePeople extends Component {
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
          <br />
          Alter: <input
            onChange={(event) => {
              this.setState({
                Alter: event.target.value
              });
            }} />
          <br />
          Gipfel: <input
            onChange={(event) => {
              this.setState({
                Gipfel: event.target.value
              });
            }} />
          <br />
          Heimat: <input
            onChange={(event) => {
              this.setState({
                Heimat: event.target.value
              });
            }} />
          <br />
          <button>Create Person</button>
        </form>
      </div>
    );
  }
}

CreatePeople.propTypes = {
  createPerson: PropTypes.func.isRequired
};

export default CreatePeople;
