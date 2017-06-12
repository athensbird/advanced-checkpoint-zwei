import {connect} from "react-redux";
import PersonDetail from "../components/PersonDetail";

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
)(PersonDetail);
