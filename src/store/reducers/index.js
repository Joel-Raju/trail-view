import { combineReducers } from 'redux';
import trailReducer from './trailReducer';

const rootReducer = combineReducers({
  trailReducer,
});

export default rootReducer;
