import draws from './../data/data';

export const SET_DRAWS = 'SET_DRAWS';
export const FETCH_DRAW = 'FETCH_DRAW';
export const SET_REGISTER = 'SET_REGISTER';
export const SET_REGISTER_VISIBLE = 'SET_REGISTER_VISIBLE';

export function setDraws() {
  return {
    type: SET_DRAWS,
    payload: draws
  };
}

export function fetchDraw(drawId) {
  const draw = draws.find(p => p.id === drawId);
  return {
    type: FETCH_DRAW,
    payload: draw
  };
}

export function setRegister(draw) {
  return {
    type: SET_REGISTER,
    payload: draw
  };
}

export function setRegisterVisible(boolean) {
  return {
    type: SET_REGISTER_VISIBLE,
    payload: boolean
  };
}
