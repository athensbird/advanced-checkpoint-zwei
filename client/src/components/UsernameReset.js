import React from "react";
import PropTypes from "prop-types";
import {Form, FormControl} from "react-bootstrap";

function UsernameReset(props) {
  return (
    <Form onSubmit={e => props.handleUsername(e)}>
      <FormControl
        onChange={props.storeUsername.bind(this)}
        placeholder="Enter your new username"
      />
    </Form>
  );
}

UsernameReset.propTypes = {
  handleUsername: PropTypes.func,
  storeUsername: PropTypes.func
};

export default UsernameReset;
