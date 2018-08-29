import React, { Component } from 'react';
import {TodoList} from './TodoList'

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: props.todos, text: '' , priority: ''};
    this.handleChange = this.handleChange.bind(this);
	this.handleChangePriority = this.handleChangePriority.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
		  <br/>
		  <label htmlFor="new-todo-priority">
            How important is it?
          </label>
		  <input
            id="new-todo-priority"
			type="number"
			min="0"
            onChange={this.handleChangePriority}
            value={this.state.priority}
          />
		  <br/>
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleChangePriority (e){
	this.setState({ priority: e.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
	  priority: this.state.priority,
      dueDate: new Date(Date.now())
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}