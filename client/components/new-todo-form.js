import React from 'react';
import { pure } from 'recompose';

class NewTodoForm extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {}

  handleChange(e) {
    e.preventDefault();
    this.setState({ description: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="+ New Todo" type="text" onChange={this.handleChange} value={this.state.description} />
        <button>Add</button>
      </form>
    )
  }
}

export default pure(NewTodoForm);
