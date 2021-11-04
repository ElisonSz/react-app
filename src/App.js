import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import "./App.css";

const defaultTodos = [
  { id: 1, text: "Cortar Cebollas", completed: true },
  { id: 2, text: "Tomar el curso de react", completed: true },
  { id: 3, text: "Jalarsela", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((f) => !!f.completed).length;
  const totalTodos = todos.length;

  let searchTodo = [];
  if (!searchValue.length >= 1) {
    searchTodo = todos;
  } else {
    searchTodo = todos.filter((f) => {
      const todoText = f.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    if(newTodos[todoIndex].completed===true){
      newTodos[todoIndex].completed = false;
    } else if (newTodos[todoIndex].completed===false){
      newTodos[todoIndex].completed = true;
    }

    setTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex,1)
    setTodos(newTodos);
  };



  return (
    <React.Fragment>
      <TodoCounter completos={completedTodos} total={totalTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchTodo.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
