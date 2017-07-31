import {connect} from "react-redux";
import UserDetail from "../components/UserDetail";

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps, null
)(UserDetail);
