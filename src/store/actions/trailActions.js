import request from '../../utils/request';
import { 
  FETCH_TRAIL_ERROR, 
  FETCH_TRAIL_SUCCESS,
  SET_LOADING,
  TRAIL_API_URL,
} from '../constants';


const setLoadingState = isLoading => ({
  type: SET_LOADING,
  payload: isLoading,
});


const getTrail = () => async (dispatch) => {
  dispatch(setLoadingState(true));
  const { error, response } = await request(TRAIL_API_URL);
  dispatch(setLoadingState(false));
  if (error) {
    dispatch({ type: FETCH_TRAIL_ERROR, payload: error });
    return;
  }
  dispatch({ type: FETCH_TRAIL_SUCCESS, payload: response });
};


export {
  getTrail,
};