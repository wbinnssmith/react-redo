import React from 'react';
import { reduxForm } from 'redux-form';
import cx from 'classnames';

const completedInputStyle = {
  fontStyle: 'italic',
  textDecoration: 'line-through'
}

const fields = ['description'];

class Todo extends React.Component {
  render() {
    const {
      fields,
      handleSubmit,
      isEditing,
      onDelete,
      onToggle,
      todo
    } = this.props;

    return (
      <li className="Todo">
        <form className="Todo--form" onSubmit={handleSubmit}>
          <button
            aria-label="Toggle todo"
            type="button"
            className={cx('Todo--circle', {
              'is-editing': isEditing,
              'is-filled': todo.completed_at
            })}
            onClick={isEditing ? onDelete : onToggle} />
          <input
            className="Todo--description"
            style={todo.completed_at ? completedInputStyle : {}}
            {...fields.description}
          />
        </form>
      </li>
    );
  }
}

export default reduxForm({
  form: 'todo',
  fields,
})(Todo);
