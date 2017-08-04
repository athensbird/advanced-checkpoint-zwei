import React from "react";
import PropTypes from "prop-types";
import {Glyphicon} from "react-bootstrap";

function Lifecount(props) {
  const heartArray = [];
  for (let i = 0; i < props.life; i++ ) {
    heartArray.push(<Glyphicon key={i} glyph="glyphicon glyphicon-heart" />);
  }
  return (
    <div>{heartArray}</div>
  );
}

Lifecount.propTypes = {
  life: PropTypes.number
};

export default Lifecount;
