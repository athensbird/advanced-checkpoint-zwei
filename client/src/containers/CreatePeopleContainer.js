import {connect} from "react-redux";
import CreatePeople from "../components/CreatePeople";

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
)(CreatePeople);
