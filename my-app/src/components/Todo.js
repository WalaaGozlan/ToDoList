import React from "react";
import axios from "axios";

const Todo = ({todo,id, handleDelete,todos, setTodos}) => {

    // const handleDelete = (id) => {
    //     console.log(todo.taskid)
    //     axios.delete('http://localhost:5000/deleteTask/'+id)
    //     .then((res) => {
    //         // console.log(res)
    //     // this.getTask();
    //     setTodos(res)
    //     })
    // }

    return (
        <div className="todo">
            <li className="todo-item">{todo.task}</li>
            <button className="complete-btn"><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={() => {handleDelete(id)}}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo;