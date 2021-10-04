// import React from "react";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button'; 
// import axios from "axios";

// class TaskList extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             tasks: []
//         };
//     }
//     componentDidMount(){
//         axios.get("http://localhost:5000/allTasks")
//         .then((res)=>{
//             this.setState({
//                 tasks: res.data
//             })
//             // console.log("mounting tasks !")
//         })
//     }
    
//     render(){
//         return (
//             <Card sx={{ maxWidth: 345 }}>
//                 <CardContent>
//                     <Typography variant="body2" color="text.secondary">
//                     </Typography>
//                 </CardContent>
//                 <CardActions>
//                     <Button size="small">Done</Button>
//                     <Button size="small">Delete</Button>
//                 </CardActions>
//             </Card> 
//         )
//     }
// }
// export default TaskList;