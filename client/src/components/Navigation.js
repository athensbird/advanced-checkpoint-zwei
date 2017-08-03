import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "../App.css";

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <NavLink to="/">Home</NavLink>
        </Nav>
        <Nav>
          <NavLink to="/api">Dictionary</NavLink>
        </Nav>
        <Nav>
          <NavLink to="/favorites">Favorite Words</NavLink>
        </Nav>
        <Nav>
          <NavLink to="/flashcard">Flashcards</NavLink>
        </Nav>
        <Nav>
          <NavLink to="/user">User Info</NavLink>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
