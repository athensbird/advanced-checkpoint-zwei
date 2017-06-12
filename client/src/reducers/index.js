import {combineReducers} from "redux";
import {
  peopleLoaded
} from "../actions";

function people(state = [], action) {
  switch (action.type) {
    case peopleLoaded:
      return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  people
});
export default rootReducer;
