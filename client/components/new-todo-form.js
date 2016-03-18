import React from 'react';
import { pure } from 'recompose';

import LinkButton from './link-button';

class NewTodoForm extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    description: ''
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ description: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ description: '' });
  }

  isValid() {
    return !!this.state.description.length;
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <input
          className="NewTodoForm--input"
          placeholder="what are you up to today?"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <LinkButton disabled={!this.isValid()}>Add</LinkButton>
      </form>
    );
  }
}

export default pure(NewTodoForm);
