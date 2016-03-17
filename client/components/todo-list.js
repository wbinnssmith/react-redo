import React from 'react';
import { connect } from 'react-redux';
import { pure } from 'recompose';

import Todo from './todo';

function stateToProps(state, props) {
  return {
    todos: state.todos
  }
}

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      <ul className="TodoList">
        {todos.map(todo => <Todo todo={todo} key={todo.id} />)}
      </ul>
    )
  }
}

export default pure(connect(stateToProps)(TodoList));
