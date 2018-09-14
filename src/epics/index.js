import { combineEpics } from 'redux-observable';
import fetchItem from './fetchItem';

export default combineEpics(
  fetchItem,
);
