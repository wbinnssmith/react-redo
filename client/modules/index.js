import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import todos from './todos';
import ui from './ui';

export default combineReducers({
  form,
  todos,
  ui
});
