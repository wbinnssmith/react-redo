import { List } from 'immutable';

export default function Todos(state=List(), action) {
  switch (action.type) {
    case 1:
      return state;
    default:
      return state;
  }
}
