import {connect} from "react-redux";
import Flashcard from "../components/Flashcard";
import {loadWordList, loadUser, practice, updateUser} from "../actions";

function mapStateToProps(state) {
  return {
    wordList: state.wordList,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadWordList: () => {
      dispatch(loadWordList());
    },
    loadUser: () => {
      dispatch(loadUser());
    },
    practice: (word) => {
      dispatch(practice(word));
    },
    updateUser: (payload) => {
      dispatch(updateUser(payload));
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Flashcard);
