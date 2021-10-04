import React from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


class Task extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

     handleChange = (e) => {
        //  console.log(e.target.value)
        this.setState ({
            task: e.target.value 
            
        }) 
        
    }

    handleClick (){
        const task = {task : this.state.task};
        // console.log(task.task);
        axios.post("http://localhost:5000/add", task)
        .then((res)=>{
            console.log("res")
           
        })

        this.setState ({
            task: ""            
        }) 
    }

    render() {
      return (
      <div>
          <form>
              <TextField id="filled-basic" label="add a new task" variant="filled" value={this.state.task} onChange={this.handleChange} />
              <Button style={{top : 10, left : 30 }} variant="contained" onClick={this.handleClick}>ADD</Button>
          </form>
      </div>
        
      );
      
    }
  }

  export default Task ;