import React from "react";
import PropTypes from "prop-types";

function PersonDetail(props) {
  const personId = props.match.params.id;
  const person = props.people.find(p => p._id == personId) || {};
  return (
    <div>
      <div>
       Name: {person.Name}
        <button>Delete</button>
      </div>
      <div>
       Alter: {person.Alter}
        <button>Delete</button>
      </div>
      <div>
       Gipfel: {person.Gipfel}
        <button>Delete</button>
      </div>
      <br />
    </div>
  );
}

PersonDetail.propTypes = {
  person: {
    Name: PropTypes.String,
    Alter: PropTypes.Number,
    Gipfel: PropTypes.Number
  },
  people: PropTypes.array,
  match: PropTypes.object
};

export default PersonDetail;
