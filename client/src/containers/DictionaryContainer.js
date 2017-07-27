import {connect} from "react-redux";
import Dictionary from "../components/Dictionary";
import {lookUp} from "../actions";

function mapDispatchToProps(dispatch) {
  return {lookUp: (word) => {
    dispatch(lookUp(word));
  }};
}

export default connect(
  null, mapDispatchToProps
)(Dictionary);
