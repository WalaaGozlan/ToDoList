import React from "react";
import axios from "axios";


const Form = ({setInputText, inputText, todos, setTodos}) =>{

    const inputTextHandler = (e) =>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const handleClick = (e) =>{
        e.preventDefault();
        const task = {task : inputText, completed: false};
        console.log(task);
        axios.post("http://localhost:5000/add", task)
        .then((res)=>{ 
            // console.log(res.data)
            // setTodos(res)
            setTodos([
            ...todos, task
            
        ])
        })
        
         
        setInputText("")
    //    this.getTask(); 
    }

    return(
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
            <button onClick={handleClick} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;