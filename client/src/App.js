import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get("/api/todos").then(res => this.setState({ todos: res.data }));
  }

  // Toggle Complete
  markComplete = _id => {
    axios.put(`/api/todos/${_id}`).then(res =>
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo._id === _id) {
            todo.complete = !todo.complete;
          }
          return todo;
        })
      })
    );
  };

  // Delete Todo
  delTodo = _id => {
    axios.delete(`/api/todos/${_id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo._id !== _id)]
      })
    );
  };

  // Add Todo
  addTodo = title => {
    axios.post("/api/todos", { title, complete: false }).then(res => {
      this.setState({
        todos: [...this.state.todos, res.data]
      });
    });
  };

  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <Route
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <div className="todo-items-wrapper">
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </div>
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
