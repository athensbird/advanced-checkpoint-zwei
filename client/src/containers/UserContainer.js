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
    handleUsername: (e) => {
      e.preventDefault();
      dispatch(updateUsername(e.target.value));
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(UserDetail);
