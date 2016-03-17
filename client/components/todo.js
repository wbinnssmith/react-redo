import React from 'react';
import cx from 'classnames';
import { pure } from 'recompose';

const Todo = ownProps => {
  const { todo, ...props } = ownProps;
  return (
    <li className="Todo" {...props}>
      <button
        aria-label="Toggle todo"
        className={cx('Todo--circle', {
          'is-filled': todo.completed_at }
        )}
        onClick={props.onToggle}
      />
      {todo.description}
    </li>
  );
}

export default pure(Todo);
