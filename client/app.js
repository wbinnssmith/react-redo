import React from 'react';
import { pure } from 'recompose';

import NewTodoForm from './components/new-todo-form';
import TodoList from './components/todo-list';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App--header">
          <h1 className="App--heading">Todos!</h1>
          <span className="App--count">{}</span>
        </header>
        <TodoList />
        <NewTodoForm />
      </div>
    )
  }
}

export default pure(App);
