import React from 'react';
import { pure } from 'recompose';

const Todo = ownProps => {
  const { todo, ...props } = ownProps;
  return (
    <li {...props}>
      {todo.description}
    </li>
  );
}

export default pure(Todo);
