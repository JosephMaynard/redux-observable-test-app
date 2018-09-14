import { ofType } from 'redux-observable';
import { ajax } from "rxjs/ajax";
import { map, mergeMap } from 'rxjs/operators';

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

const fetchReposByUser = action$ => action$.pipe(
  ofType(FETCH_USER),
  mergeMap(action =>
    ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
      map(response => fetchUserFulfilled(response))
    )
  )
);

export default fetchReposByUser;
