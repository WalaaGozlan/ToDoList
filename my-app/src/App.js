// import React, {useState} from "react";
import './App.css';
import Task from "./components/task";
// import Form from "./components/todoForm";

function App() {
  // const [inputText, setInputText] = useState("");
  return (
    <div className="App">
        <header>
          <h1>MANAGE YOUR DAY</h1>
       </header>
      <Task />
      
    </div>
  );
}

export default App;
