import React, {useState} from "react";
import './App.css';
import axios from "axios";
import TodoList from "./components/todoList";
import Form from "./components/todoForm";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const getTask = () => {    
    axios.get("http://localhost:5000/allTasks")
    .then((res)=> res.data )
    .then((res)=>{
        console.log(res);
        setTodos(res)
        // this.setState({
        //     tasksList: res
        // })
        // console.log("mounting tasks !")
    })   
}

  return (
    <div className="App">
      <header>
        <h1>MANAGE YOUR DAY</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} getTask={getTask} inputText={inputText} setInputText={setInputText} />
      <TodoList todos={todos} setTodos={setTodos} getTask={getTask} inputText={inputText} setInputText={setInputText}/>
    </div>
  );
}

export default App;
