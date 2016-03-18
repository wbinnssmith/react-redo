import React from 'react';
import { connect } from 'react-redux';
import { pure } from 'recompose';
import plur from 'plur';

import { addTodo } from './modules/todos';
import NewTodoForm from './components/new-todo-form';
import TodoList from './components/todo-list';

function stateToProps(state, props) {
  return {
    todoCount: Object.keys(state.todos).length
  }
}

const dispatchToProps = {
  addTodo
}

class App extends React.Component {
  render() {
    const { addTodo, todoCount } = this.props;

    return (
      <div className="App">
        <header className="App--header">
          <h1 className="App--heading">Todos!</h1>
          <span className="App--count">{todoCount} {plur('todo', todoCount)}</span>
        </header>
        <TodoList />
        <NewTodoForm onSubmit={addTodo}/>
      </div>
    )
  }
}

export default pure(connect(stateToProps, dispatchToProps)(App));
