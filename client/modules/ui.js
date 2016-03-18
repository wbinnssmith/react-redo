const SET_EDITING = 'UI/SET_EDITING';

export function setEditing(isEditing) {
  return {
    type: SET_EDITING,
    payload: isEditing
  }
}

export default function ui(state={}, action) {
  switch (action.type) {
    case SET_EDITING:
      return {
        ...state,
        isEditing: action.payload };
    default:
    return state;
  }
}
