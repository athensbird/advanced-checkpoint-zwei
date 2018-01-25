import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { loadWordList, loadUser } from "./actions";

function mapDispatchToProps(dispatch) {
  return {
    loadWordList: () => {
      dispatch(loadWordList());
    },
    loadUser: () => {
      dispatch(loadUser());
    }
  };
}

export default connect(null ,mapDispatchToProps)(App);
