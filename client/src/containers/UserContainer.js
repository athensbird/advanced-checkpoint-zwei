import {connect} from "react-redux";
import UserDetail from "../components/UserDetail";
import {loadUser, updateUsername} from "../actions";

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUser: () => {
      dispatch(loadUser());
    },
    handleUpperUsername: (username) => {
      dispatch(updateUsername(username));
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(UserDetail);
