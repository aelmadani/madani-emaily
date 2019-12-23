import * as types from "../actions/types";

export default function(state = null, action) {
  //console.log(action);
  switch (action.type) {
    case types.FETCH_USER:
      return action.payload || false; // if empty string => return false
    default:
      return state;
  }
}
