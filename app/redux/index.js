import { combineReducers } from 'redux';
import toolsReducer from './tools';


const appReducer = combineReducers({
  tools: toolsReducer,
});

export default appReducer;
