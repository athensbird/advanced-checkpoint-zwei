import {connect} from "react-redux";
import ListOfPerson from "../components/ListOfPerson";
import {deletePerson} from "../actions";

function mapStateToProps(state) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deletePerson: (id) => {
      dispatch(deletePerson(id));
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ListOfPerson);
