import React from "react";
import PropTypes from "prop-types";

function PersonDetail(props) {
  const personId = props.match.params.id;
  // eslint-disable-next-line
  const person = props.people.find(p => p._id == personId) || {};
  return (
    <div>
      <div>
       Name: {person.Name}
      </div>
      <div>
       Alter: {person.Alter}
      </div>
      <div>
       Große: {person.Große}
      </div>
      <br />
    </div>
  );
}

PersonDetail.propTypes = {
  person: {
    Name: PropTypes.String,
    Alter: PropTypes.Number,
    Große: PropTypes.Große
  },
  people: PropTypes.array,
  match: PropTypes.object,
  deletePerson: PropTypes.func
};

export default PersonDetail;
