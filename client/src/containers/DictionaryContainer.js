import {connect} from "react-redux";
import Dictionary from "../components/Dictionary";
import {lookUp} from "../actions";

function mapDispatchToProps(dispatch) {
  return {lookUp: (word) => {
    dispatch(lookUp(word));
  }};
}

function mapStateToProps(state) {
  return {
    word: state.word
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Dictionary);
