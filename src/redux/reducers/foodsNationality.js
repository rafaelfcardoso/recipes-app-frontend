import { FETCH_FOOD_PER_NATIONALITIES } from '../actions';

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_FOOD_PER_NATIONALITIES:
    return action.payload;
  default:
    return state;
  }
};

export default reducer;
