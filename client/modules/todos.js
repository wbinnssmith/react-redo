import request from 'xhr';

const TOGGLE_TODO = 'TODOS/TOGGLE_TODO';

export function toggleTodo(id) {
  return function (dispatch, getState) {
    const todo = getState().todos[id];
    const completed_at = todo.completed_at ? null: new Date().toISOString();

    request.patch(`/api/v1/todos/${id}`, {
      json: { completed_at },
    }, (err, resp) => {
      dispatch({
        type: TOGGLE_TODO,
        payload: {
          todo: resp.body
        }
      });
    });
  }
}

export default function Todos(state={}, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      const todo = action.payload.todo;

      debugger;
      return {
        ...state,
        [todo.id]: {
          ...todo
        }
      };
    default:
      return state;
  }
}
