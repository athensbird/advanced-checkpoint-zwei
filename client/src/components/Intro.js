import React from "react";
// import PropTypes from "prop-types";
import {Jumbotron, Panel} from "react-bootstrap";

function Intro() {
  return (
    <div>
      <Jumbotron className="intro">
        <p>Welcome to the dictionary game! Here you can easily
         use our website to search for any word you want and
         add it to your favorites list. To solidify your memory,
          you may find it helpful to dive into the built-in
          flashcard game where you could test your understanding of
           the words and make progress towards becoming a word guru!
        Also, you can check out your overall progress
         by clicking at the user info tab. Good luck and
         have fun!</p>
      </Jumbotron>
      <Panel>
        <a href="mailto:mark.wang@tamu.edu">Email Us</a>
      </Panel>
      <h6>&copy; 2017 MarcosWeb All rights reserved</h6>
    </div>
  );
}

export default Intro;
