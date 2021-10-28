// import React from "react";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button'; 
// import axios from "axios";

// class SingleTask extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             task: "",
            // black: true
//         };
//     }

//       handleChange = (e) => {
        //  console.log(e.target.value)
    //     this.setState ({
    //         task: e.target.value 
            
    //     }) 
        
    // }

    // handleClick (){
    //     const task = {task : this.state.task};
    //     // console.log(task);
    //     axios.post("http://localhost:5000/add", task)
    //     .then((res)=>{           
    //     })
    //     this.setState ({
    //         task: ""            
    //     })
    //    this.getTask(); 
    // }

    // handleDelete (id) {
    //     axios.delete('http://localhost:5000/deleteTask/' + id)
    //     .then((res) => {
    //         // console.log(res)
    //     this.getTask();
    //     })
    // }

    // handleDone (id) {
    //     axios.get('http://localhost:5000/done/' + id)
    //     .then((result) => {
    //         console.log(result.data[0].taskid)
    //         if(result.data[0].taskid === id){
    //             this.setState({black: !this.state.black})
    //         }                       
    //     })
        
    // }
    
//     render(){
//         return (
//             // <Card style={{margin:"10px 30px"}} sx={{ maxWidth: 345 }} key={index}>
                //     <CardContent>
                //         <Typography variant="body2" color="text.secondary">{this.state.task}
                //         </Typography>
                //     </CardContent>
                //     <CardActions>
                //         <Button className={btn_class} size="small" onClick={() => this.handleDone(task.taskid)}>Done</Button>
                //         <Button size="small" onClick={() => this.handleDelete(task.taskid)}>Delete</Button>
                //     </CardActions>
                // </Card>  
//         )
//     }
// }
// export default TaskList;