import {combineReducers} from "redux";
import {
  PEOPLE_LOADED, WORD_LOADED, ADDED_TO_FAVORITES,
  WORD_LIST_LOADED, CLEAR_WORD, USER_LOADED,
  WORD_ALREADY_ADDED
} from "../actions";

function people(state = [], action) {
  switch (action.type) {
    case PEOPLE_LOADED:
      return action.value;
  }
  return state;
}

function word(state = "", action) {
  switch (action.type) {
    case WORD_LOADED:
      return action.definition;
    case CLEAR_WORD:
      return "";
  }
  return state;
}

function wordList(state = [], action) {
  switch (action.type) {
    case ADDED_TO_FAVORITES:
      return [...state, action.array];
    case WORD_LIST_LOADED:
      return action.list;
    case WORD_ALREADY_ADDED:
      console.log("Awaiting to be handled");
  }
  return state;
}

function user(state = [], action) {
  switch (action.type) {
    case USER_LOADED:
      return action.currentUser;
  }
  return state;
}

const rootReducer = combineReducers({
  people,
  word,
  wordList,
  user
});
export default rootReducer;
