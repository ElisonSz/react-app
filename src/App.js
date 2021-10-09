import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import "./App.css";

const todos = [
  { id: 1, text: "Cortar Cebollas", completed: true },
  { id: 2, text: "Tomar el curso de react", completed: false },
  { id: 3, text: "Jalarsela", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter
        completos={todos.filter((f) => f.completed === true)}
        incompletos={todos.filter((f) => f.completed === false)}
      />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
