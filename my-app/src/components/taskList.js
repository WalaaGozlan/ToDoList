import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 

class TaskList extends React.Component{
    componentDidMount
    
    render(){
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Done</Button>
                    <Button size="small">Delete</Button>
                </CardActions>
            </Card> 
        )
    }
}
export default TaskList;