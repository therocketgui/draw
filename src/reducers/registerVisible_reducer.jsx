import { SET_REGISTER_VISIBLE } from '../actions';

export default function(state = false, action){
  switch(action.type){
    case SET_REGISTER_VISIBLE:
      return action.payload;
    default:
      return state;
  }
}
