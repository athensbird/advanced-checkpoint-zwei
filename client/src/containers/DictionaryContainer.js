import {connect} from "react-redux";
import Dictionary from "../components/Dictionary";
import {lookUp, addToFavorites, loadWordList} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    lookUp: (word) => {
      dispatch(lookUp(word));
    },
    addToFavorites: (array) => {
      dispatch(addToFavorites(array));
    },
    loadWordList: () => {
      dispatch(loadWordList());
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
