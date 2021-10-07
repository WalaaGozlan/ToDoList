import React from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

class Task extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: "",
            tasksList: [],
            black: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick  = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone   = this.handleDone.bind(this);
    }
    componentDidMount(){
      this.getTask()
    }


     getTask = () => {    
        axios.get("http://localhost:5000/allTasks")
        .then((res)=> res.data )
        .then((res)=>{
            this.setState({
                tasksList: res
            })
            // console.log("mounting tasks !")
        })   
    }
    

    handleChange = (e) => {
        //  console.log(e.target.value)
        this.setState ({
            task: e.target.value 
            
        }) 
        
    }

    handleClick (){
        const task = {task : this.state.task};
        // console.log(task);
        axios.post("http://localhost:5000/add", task)
        .then((res)=>{           
        })
        this.setState ({
            task: ""            
        })
       this.getTask(); 
    }


    handleDelete (id) {
        axios.delete('http://localhost:5000/deleteTask/' + id)
        .then((res) => {
            // console.log(res)
        this.getTask();
        })
    }

    handleDone (id) {
        axios.get('http://localhost:5000/done/' + id)
        .then((result) => {
            console.log(result.data[0].taskid)
            if(result.data[0].taskid === id){
                this.setState({black: !this.state.black})
            }                       
        })
    }

    render() {
        let btn_class = this.state.black ? "blackButton" : "whiteButton";
      return (
      <div>
          <form>
              <TextField id="filled-basic" label="add a new task" variant="filled" value={this.state.task} onChange={this.handleChange} />
              <Button style={{top : 10, left : 30 }} variant="contained" onClick={this.handleClick}>ADD</Button>
                <div  style={{display: "grid", gridTemplateColumns:"auto auto auto"}}>
                {this.state.tasksList.map((task, index)=>(
                <Card style={{margin:"10px 30px"}} sx={{ maxWidth: 345 }} key={index}>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">{task.task}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className={btn_class} size="small" onClick={() =>this.handleDone(task.taskid)}>Done</Button>
                        <Button size="small" onClick={() => this.handleDelete(task.taskid)}>Delete</Button>
                    </CardActions>
                </Card> 
                ))}
                 </div>
                
          </form>
      </div>
        
      );
      
    }
  }

  export default Task ;