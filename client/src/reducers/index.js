import {combineReducers} from "redux";
import {
  PEOPLE_LOADED, WORD_LOADED
} from "../actions";

function people(state = [], action) {
  switch (action.type) {
    case PEOPLE_LOADED:
      console.log(action);
      return action.value;
  }
  return state;
}

function word(state = [], action) {
  debugger;
  switch (action.type) {
    case WORD_LOADED:
      return action.definition;
  }
  return state;
}

const rootReducer = combineReducers({
  people,
  word
});
export default rootReducer;
