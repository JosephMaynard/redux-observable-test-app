import { ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';

import {
  FETCH_NEW_ITEM,
  ADD_ITEM,
} from '../constants/action-types';

import { randomString } from '../utils/helpers';


const fetchItem = action$ => action$.pipe(
  ofType(FETCH_NEW_ITEM),
  mapTo({ type: ADD_ITEM, item: randomString() })
);

export default fetchItem;
