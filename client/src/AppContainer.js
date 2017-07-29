import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadWordList} from "./actions";

function mapStateToProps(state) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadWordList: () => {
      dispatch(loadWordList());
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
