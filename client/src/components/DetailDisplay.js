import React from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

function DetailDisplay(props) {
  function handleUsername(e) {
    props.handleUsername(e.target.value);
  }
  return (
    <div>
      <form>
        <p>Setup your username</p>
        <input
          onChange={handleUsername.bind(this)}
          placeholder="Enter your new username"
        />
        <p>Your Level: {props.user.level}</p>
        <p>You have played {props.user.gamesPlayed} games</p>
        <button>Submit</button>
      </form>
    </div>
  );
}

DetailDisplay.propTypes = {
  user: PropTypes.object,
  level: PropTypes.number,
  gamesPlayed: PropTypes.number,
  handleUsername: PropTypes.func
};


export default DetailDisplay;
