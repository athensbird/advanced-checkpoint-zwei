import {connect} from "react-redux";
import Favorites from "../components/Favorites";
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
)(Favorites);
