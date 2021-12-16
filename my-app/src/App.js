import React, {useState} from "react";
import './App.css';
import TodoList from "./components/todoList";
import Form from "./components/todoForm";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>MANAGE YOUR DAY</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
