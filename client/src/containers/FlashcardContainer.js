import {connect} from "react-redux";
import Flashcard from "../components/Flashcard";
import {loadWordList} from "../actions";

function mapStateToProps(state) {
  return {
    wordList: state.wordList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadWordList: () => {
      dispatch(loadWordList());
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Flashcard);
