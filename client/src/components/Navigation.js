import React, {Component} from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import "../App.css";

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <NavItem eventKey="1" className="navitems" href="/home">Home</NavItem>
          <NavItem eventKey="2" className="navitems" href="/api">Dictionary</NavItem>
          <NavItem eventKey="3" className="navitems" href="/favorites">Favorite Words</NavItem>
          <NavItem eventKey="4" className="navitems" href="/flashcard">Flashcards</NavItem>
          <NavItem eventKey="5" className="navitems" href="/user">User Info</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
