import {connect} from "react-redux";
import Dictionary from "../components/Dictionary";
import {lookUp, addToFavorites} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    lookUp: (word) => {
      dispatch(lookUp(word));
    },
    addToFavorites: (array) => {
      dispatch(addToFavorites(array));
    }
  };
}

function mapStateToProps(state) {
  return {
    word: state.word
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Dictionary);
