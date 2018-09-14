import { combineReducers } from 'redux';

import defaultReducer from './defaultReducer';
import itemList from './itemList';

const rootReducer = combineReducers({
  defaultReducer,
  itemList,
});

export default rootReducer;
