import { 
  FETCH_TRAIL_SUCCESS,
  SET_LOADING
} from '../constants';

const INITIAL_STATE = {
  activeTrail: {},
  isFetching: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FETCH_TRAIL_SUCCESS:
      return { 
        ...state, 
        activeTrail: action.payload 
      };

    case SET_LOADING:
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;  
  }
};