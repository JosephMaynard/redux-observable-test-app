import { combineEpics } from 'redux-observable';
import fetchReposByUser from './fetchReposByUser';
import fetchItem from './fetchItem';

export default combineEpics(
  fetchReposByUser,
  fetchItem,
);
