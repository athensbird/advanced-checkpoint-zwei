import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function ListOfPerson(props) {
  const list = props.people.map(person => {
    return (
      <div key={person._id}>
        <br />
        <div>
          Name: {person.Name}
        </div>
        <div>
          Alter: {person.Alter}
        </div>
        <div>
          Gipfel: {person.Gipfel}
          <button onClick={props.deletePerson(person._id)}>Delete</button>
        </div>
        <br />
        <Link to={"/list/" + person._id}>Detail Page</Link>
      </div>
    );
  });
  return (<div>{list}</div>);
}

ListOfPerson.propTypes = {
  people: PropTypes.array.isRequired,
  deletePerson: PropTypes.func
};

export default ListOfPerson;
