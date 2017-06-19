import {connect} from "react-redux";
import PersonDetail from "../components/PersonDetail";

function mapStateToProps(state) {
  return {
    people: state.people
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     deletePerson: () => {
//       dispatch(deletePerson());
//     }
//   };
// }

export default connect(
  mapStateToProps, null
)(PersonDetail);
