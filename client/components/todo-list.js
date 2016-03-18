import values from 'lodash/values';
import React from 'react';
import { connect } from 'react-redux';
import { pure } from 'recompose';

import Todo from './todo';
import { toggleTodo, updateTodo } from '../modules/todos';

function stateToProps(state, props) {
  return {
    todos: values(state.todos).sort((a, b) => a.id - b.id)
  }
}

const dispatchToProps = {
  toggleTodo,
  updateTodo
}

class TodoList extends React.Component {
  render() {
    const { todos, toggleTodo, updateTodo } = this.props;

    return (
      <ul className="TodoList">
        {todos.map(todo =>
          <Todo
            todo={todo}
            key={todo.id}
            onToggle={() => toggleTodo(todo.id)}
            onUpdate={attrs => updateTodo(todo.id, attrs)}
          />
        )}
      </ul>
    )
  }
}

export default pure(connect(stateToProps, dispatchToProps)(TodoList));
