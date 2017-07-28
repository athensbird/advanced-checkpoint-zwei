import {combineReducers} from "redux";
import {
  PEOPLE_LOADED, WORD_LOADED, ADDED_TO_FAVORITES
} from "../actions";

function people(state = [], action) {
  switch (action.type) {
    case PEOPLE_LOADED:
      console.log(action);
      return action.value;
  }
  return state;
}

function word(state = null, action) {
  switch (action.type) {
    case WORD_LOADED:
      return action.definition;
  }
  return state;
}

function wordList(state = [], action) {
  switch (action.type) {
    case ADDED_TO_FAVORITES:
      return [...state, action.array];
  }
  return state;
}

const rootReducer = combineReducers({
  people,
  word,
  wordList
});
export default rootReducer;
