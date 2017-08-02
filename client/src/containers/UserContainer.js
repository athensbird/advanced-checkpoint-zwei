import {connect} from "react-redux";
import UserDetail from "../components/UserDetail";
import {loadUser, updateUser} from "../actions";

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
      dispatch(updateUser(username));
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(UserDetail);
