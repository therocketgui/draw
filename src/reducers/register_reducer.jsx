import { SET_REGISTER } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_REGISTER:
      return action.payload;
    default:
      return state;
  }
}
