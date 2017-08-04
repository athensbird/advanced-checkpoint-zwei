import {connect} from "react-redux";
import WordDetail from "../components/WordDetail";
import {deleteWord} from "../actions";

function mapStateToProps(state) {
  return {
    wordList: state.wordList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteWord: (e, item) => {
      e.preventDefault();
      dispatch(deleteWord(item));
    }
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(WordDetail);
