import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import ListOfPersonContainer from "./containers/ListOfPersonContainer";
import CreatePeopleContainer from "./containers/CreatePeopleContainer";
import PersonDetailContainer from "./containers/PersonDetailContainer";
import DictionaryContainer from "./containers/DictionaryContainer";
import FavoritesContainer from "./containers/FavoritesContainer";
import WordDetailContainer from "./containers/WordDetailContainer";
import FlashcardContainer from "./containers/FlashcardContainer";
import UserContainer from "./containers/UserContainer";
import UsernameReset from "./components/UsernameReset";
class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadPeople();
    this.props.loadWordList();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/list" exact component={ListOfPersonContainer} />
            <Route path="/create" component={CreatePeopleContainer} />
            <Route path="/list/:id" component={PersonDetailContainer} />
            <Route path="/api" component={DictionaryContainer} />
            <Route path="/favorites" exact component={FavoritesContainer} />
            <Route path="/favorites/:id" component={WordDetailContainer} />
            <Route path="/flashcard" exact component={FlashcardContainer} />
            <Route path="/user" exact component={UserContainer} />
            <Route path="/user/resetusername" component={UsernameReset} />
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
  loadWordList: PropTypes.func,
  loadPeople: PropTypes.func,
  people: PropTypes.array
};

export default (App);
