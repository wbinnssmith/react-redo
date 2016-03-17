import { applyMiddleware, createStore as createReduxStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './modules';

export default function createStore(initialState) {
  return createReduxStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
