import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import ListOfPersonContainer from "./containers/ListOfPersonContainer";
import CreatePeopleContainer from "./containers/CreatePeopleContainer";
import PersonDetailContainer from "./containers/PersonDetailContainer";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadPeople();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="links">
            <Link to="/list">List</Link>
            <br />
            <Link to="/create">Create a Person</Link>
          </div>
          <Switch>
            <Route path="/list" exact component={ListOfPersonContainer} />
            <Route path="/create" component={CreatePeopleContainer} />
            <Route path="/list/:id" component={PersonDetailContainer} />
          </Switch>
        </div>
      </BrowserRouter>
      /*
      <div>
        <ListOfPerson people={this.props.people} />
      </div>
      */
    );
  }
}

App.propTypes = {
  loadPeople: PropTypes.func,
  people: PropTypes.array
};

export default (App);
