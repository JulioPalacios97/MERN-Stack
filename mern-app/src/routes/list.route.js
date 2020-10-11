import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./list.css";

const Todo = (props) => (
  <tr>
    <td className={props.todo.completed ? "completed" : ""}>
      {props.todo.description}
    </td>
    <td className={props.todo.completed ? "completed" : ""}>
      {props.todo.responsible}
    </td>
    <td className={props.todo.completed ? "completed" : ""}>
      {props.todo.priority}
    </td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  List() {
    return this.state.todos.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: 20 }}>
        <h3>List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.List()}</tbody>
        </table>
      </div>
    );
  }
}
