import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { pure } from 'recompose';
import plur from 'plur';

import { addTodo } from './modules/todos';
import { setEditing } from './modules/ui';
import LinkButton from './components/link-button';
import NewTodoForm from './components/new-todo-form';
import TodoList from './components/todo-list';

function stateToProps(state) {
  return {
    isEditing: state.ui.isEditing,
    todoCount: Object.keys(state.todos).length,
    completedCount: _.filter(state.todos, t => t.completed_at).length
  };
}

const dispatchToProps = {
  addTodo,
  setEditing
};

class App extends React.Component {
  render() {
    const {
      addTodo,
      completedCount,
      isEditing,
      setEditing,
      todoCount
    } = this.props;

    return (
      <div className="App">
        <header className="App--header">
          <h1 className="App--heading">Todos!</h1>
          <span className="App--count">
            {completedCount} <strong>completed</strong> of {' '}
            {todoCount} <strong>{plur('todo', todoCount)}</strong>
          </span>
          <LinkButton onClick={() => setEditing(!isEditing)}>
            {isEditing ? <strong>Done</strong> : 'Edit'}
          </LinkButton>
        </header>
        <TodoList />
        <NewTodoForm onSubmit={addTodo} />
      </div>
    );
  }
}

export default pure(connect(stateToProps, dispatchToProps)(App));
