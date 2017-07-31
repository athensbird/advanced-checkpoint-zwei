import {connect} from "react-redux";
import UserDetail from "../components/UserDetail";
import {loadUser} from "../actions";

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUser: () => {
      dispatch(loadUser());
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(UserDetail);
