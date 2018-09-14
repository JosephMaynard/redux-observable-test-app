import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from '../epics';
import rootReducer from '../reducers/index';

const epicMiddleware = createEpicMiddleware();

const middleware = [epicMiddleware];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );

epicMiddleware.run(rootEpic);

export default store;
