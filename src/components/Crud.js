import React, { useState, useEffect } from "react";
import Crud2 from "./Crud2";
import Crud3 from "./Crud3";
import "./Crud.css";

const LOCAL_STORAGE_KEY = "react-todo-list-task";

const Crud = () => {
  const [todos, setClud] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setClud(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text) return;
    setClud([todo, ...todos]);
  };

  const removeTodo = (id) => {
    const removeArray = todos.filter((todo) => todo.id !== id);
    setClud(removeArray);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) return;
    setClud((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setClud(updatedTodos);
  };

  return (
    <section className="main-container">

      <Crud2 onSubmit={addTodo} />

      <center>
        <button className="crud-header">ADD NEW STUDENT</button>
      </center>

      <div className="header-nav">
        <a href="">Name</a>
        <a href="">Email</a>
        <a href="">Phone</a>
        <a href="">Enroll Number</a>
        <a href="">Date of admission</a>
        <a href="">menu</a>
      </div>
      <Crud3
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </section>
  );
};

export default Crud;
