import {connect} from "react-redux";
import Dictionary from "../components/Dictionary";
import {lookUp, addToFavorites, loadWordList, clearWord} from "../actions";

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
    },
    clearWord: () => {
      dispatch(clearWord());
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
