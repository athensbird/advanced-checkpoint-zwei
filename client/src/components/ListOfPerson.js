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
        <Link to={"/list/" + person._id}>Detail Page</Link>
      </div>
    );
  });
  return (<div>{list}</div>);
}

ListOfPerson.propTypes = {
  people: PropTypes.array.isRequired,
};

export default ListOfPerson;
