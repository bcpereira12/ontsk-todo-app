import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.complete
        ? "line-through #feba57 solid"
        : "none"
    };
  };

  render() {
    const { _id, title } = this.props.todo;
    return (
      <div className="todo-item">
        <div style={this.getStyle()} className="todo-item__item">
          <input
            type="checkbox"
            className="checkbox__icon"
            onChange={this.props.markComplete.bind(this, _id)}
          />{" "}
          {title}
        </div>
        <div className="todo-item-btn">
          <i
            className="todo-item-delete__icon far fa-times-circle"
            onClick={this.props.delTodo.bind(this, _id)}
          ></i>
        </div>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
