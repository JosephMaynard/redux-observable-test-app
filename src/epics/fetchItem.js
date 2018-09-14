import { ofType } from 'redux-observable';
import { ajax } from "rxjs/ajax";
import { map, mapTo, mergeMap  } from 'rxjs/operators';

import {
  FETCH_NEW_ITEM,
  ADD_ITEM,
} from '../constants/action-types';

import { randomString } from '../utils/helpers';


const fetchItem = (action$, state$) => {
  console.log('ding', ajax);
  return action$.pipe(
    ofType(FETCH_NEW_ITEM),
    mergeMap(() =>
      ajax.getJSON('https://geek-jokes.sameerkumar.website/api').pipe(
        map(response => ({ type: ADD_ITEM, item: response }))
      )
    )
  );
};

export default fetchItem;
