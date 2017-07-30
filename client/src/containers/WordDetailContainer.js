import {connect} from "react-redux";
import WordDetail from "../components/WordDetail";
import {practice, deleteWord} from "../actions";

function mapStateToProps(state) {
  return {
    wordList: state.wordList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    practice: (item) => {
      dispatch(practice(item));
    },
    deleteWord: (e, item) => {
      e.preventDefault();
      dispatch(deleteWord(item));
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(WordDetail);
