import { SET_DRAWS, FETCH_DRAW } from '../actions';

export default function(state = [], action){
  switch(action.type){
    case SET_DRAWS:
      return action.payload;
    case FETCH_DRAW:
      return [ action.payload ];
    default:
      return state;
  }
}
