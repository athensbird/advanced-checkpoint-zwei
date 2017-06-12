import {connect} from "react-redux";
import CreatePeople from "../components/CreatePeople";
import {createPerson} from "../actions";

function mapStateToProps(state) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {createPerson: (person) => {
    dispatch(createPerson(person));
  }};
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(CreatePeople);
