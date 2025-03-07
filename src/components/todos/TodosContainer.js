import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {
  renderTodos = () => {
    return this.props.todos.map((todo) => (
      <Todo delete={this.props.delete} key={todo.id} todo={todo} />
    ));
  };

  render() {
    return <div>{this.renderTodos()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (formData) => dispatch({ type: "DELETE_TODO", payload: formData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
