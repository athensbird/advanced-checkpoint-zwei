import {connect} from "react-redux";
import ListOfPerson from "../components/ListOfPerson";

function mapStateToProps(state) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ListOfPerson);
