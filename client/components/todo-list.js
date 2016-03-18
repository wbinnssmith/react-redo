import values from 'lodash/values';
import React from 'react';
import { connect } from 'react-redux';
import { pure } from 'recompose';

import Todo from './todo';
import { deleteTodo, toggleTodo, updateTodo } from '../modules/todos';

function stateToProps(state, props) {
  return {
    todos: values(state.todos).sort((a, b) => a.id - b.id),
    isEditing: state.ui.isEditing
  }
}

const dispatchToProps = {
  deleteTodo,
  toggleTodo,
  updateTodo
}

class TodoList extends React.Component {
  render() {
    const { deleteTodo, isEditing, todos, toggleTodo, updateTodo } = this.props;

    return (
      <ul className="TodoList">
        {todos.map(todo =>
          <Todo
            todo={todo}
            initialValues={todo}
            isEditing={isEditing}
            key={todo.id}
            formKey={`${todo.id}`}
            onDelete={() => deleteTodo(todo.id)}
            onToggle={() => toggleTodo(todo.id)}
            onSubmit={attrs => updateTodo(todo.id, attrs)}
          />
        )}
      </ul>
    );
  }
}

export default pure(connect(stateToProps, dispatchToProps)(TodoList));
