import React from 'react';
import { pure } from 'recompose';

import TodoList from './components/todo-list';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Todos!</h1>
        <TodoList />
      </div>
    )
  }
}

export default pure(App);
