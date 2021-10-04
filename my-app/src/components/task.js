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
            tasksList: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:5000/allTasks")
        .then((res)=> res.data)
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
            console.log(res)
           
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
              {this.state.tasksList.map((task)=>(

                <div style={{display: "grid", gridTemplateColumns:"auto auto auto"}}>
                <Card  sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">{task.task}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Done</Button>
                        <Button size="small">Delete</Button>
                    </CardActions>
                </Card> 
                 </div>
                ))}
          </form>
      </div>
        
      );
      
    }
  }

  export default Task ;