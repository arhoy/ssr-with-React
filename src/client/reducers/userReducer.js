import { FETCH_USERS } from '../actions/types';

const initialState = {
  users: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERS:
      return {
        ...state,
        users: payload
      };
    default:
      return state;
  }
}
