import {
  UPDATE_TEXT_OF_ITEM,
  SWITCH_FORM_VISIBILITY_FOR_ITEM,
} from '../constants/actionTypes';
import { ItemRecord } from '../models/ItemRecord';

const itemReducer = (prevState = new ItemRecord(), action) => {
  switch (action.type) {
    case UPDATE_TEXT_OF_ITEM: {
      return prevState.merge({ text: action.payload.text });
    }
    case SWITCH_FORM_VISIBILITY_FOR_ITEM: {
      return prevState.merge({ formDisplayed: !prevState.formDisplayed });
    }
    default:
      return prevState;
  }
};

export { itemReducer };