import { POST_THING, GET_THING, PUSH_COMMENT } from '../../consts/things';

const initialState = { FormPosted: false };

export default (state = initialState, action) => {
  if (action.type === POST_THING) {
    return { ...state, ID: action.data, FormPosted: true };
  } else if (action.type === GET_THING) {
    return { ...state, thingData: action.data };
  } else if (action.type === PUSH_COMMENT) {
    return { ...state, thingData: action.data };
  } else {
    return state;
  }
};
