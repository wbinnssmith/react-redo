import axios from 'axios';

const ADD_TODO = 'TODOS/ADD_TODO';
const UPDATE_TODO = 'TODOS/UPDATE_TODO';

export function addTodo(attrs) {
  return function (dispatch, getState) {
    axios.post(`/api/v1/todos`, attrs).then(resp => {
      dispatch({
        type: ADD_TODO,
        payload: {
          todo: resp.data
        }
      });
    });
  }
}

export function updateTodo(id, attrs) {
  return function (dispatch, getState) {
    const todo = getState().todos[id];

    axios.patch(`/api/v1/todos/${id}`, attrs).then(resp => {
      dispatch({
        type: UPDATE_TODO,
        payload: {
          todo: resp.data
        }
      });
    });
  }
}

export function toggleTodo(id) {
  return function (dispatch, getState) {
    const todo = getState().todos[id];
    const completed_at = todo.completed_at ? null: new Date().toISOString();

    updateTodo(id, { completed_at })(dispatch, getState);
  }
}

function updateFromAction(state, action) {
  const todo = action.payload.todo;

  return {
    ...state,
    [todo.id]: {
      ...todo
    }
  };
}

export default function Todos(state={}, action) {
  switch (action.type) {
    case UPDATE_TODO:
      return updateFromAction(state, action);
    case ADD_TODO:
      return updateFromAction(state, action);
    default:
      return state;
  }
}
