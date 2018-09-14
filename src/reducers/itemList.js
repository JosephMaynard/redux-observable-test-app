import {
  ADD_ITEM,
} from '../constants/action-types';

import { randomString } from '../utils/helpers';

const items = Array.from(new Array(5)).map(() => randomString());

const initialState = {
  items,
};

const itemList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item],
      };
    default:
      return state;
  }
};

export default itemList;
