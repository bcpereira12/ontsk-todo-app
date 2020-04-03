import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="form-input-wrapper">
        <div className="form-control">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-input-box"
              name="title"
              placeholder="Add Todo ..."
              value={this.state.title}
              onChange={this.onChange}
            />

            <button className="form-submit-btn" type="submit">
              <i className="fas fa-plus-square"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
