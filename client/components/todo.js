import React from 'react';
import cx from 'classnames';
import { pure } from 'recompose';

const completedInputStyle = {
  fontStyle: 'italic',
  textDecoration: 'line-through'
}

class Todo extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.setViewing = this.setViewing.bind(this);
  }

  state = {};

  setViewing() {
    this.setState({
      isEditing: false,
      value: this.props.todo.description
    })
  }

  setEditing() {
    this.setState({
      isEditing: true
    })
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onUpdate({ description: this.state.value });
  }

  render() {
    const {
      todo,
      ...props
    } = this.props;

    return (
      <li className="Todo" {...props}>
        <form className="Todo--form" onSubmit={this.handleSubmit}>
          <button
            aria-label="Toggle todo"
            type="button"
            className={cx('Todo--circle', {
              'is-filled': todo.completed_at }
            )}
            onClick={props.onToggle}
          />
          <input
            className="Todo--description"
            style={todo.completed_at ? completedInputStyle : {}}
            onFocus={this.setEditing}
            onBlur={this.setViewing}
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </li>
    );
  }
}

export default pure(Todo);
