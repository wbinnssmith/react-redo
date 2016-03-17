import React from 'react';
import { pure } from 'recompose';

const Todo = ownProps => {
  const { todo, ...props } = ownProps;
  return (
    <li className="Todo" {...props}>
      {todo.description}
    </li>
  );
}

export default pure(Todo);
