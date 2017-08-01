import {connect} from "react-redux";
import Flashcard from "../components/Flashcard";
import {loadWordList, practice} from "../actions";

function mapStateToProps(state) {
  return {
    wordList: state.wordList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadWordList: () => {
      dispatch(loadWordList());
    },
    practice: (word) => {
      dispatch(practice(word));
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Flashcard);
