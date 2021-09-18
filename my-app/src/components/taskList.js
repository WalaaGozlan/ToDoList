import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

class TaskList extends React.Component {
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

    handleClick = () => {
        
    }

    render() {
      return (
      <div>
          <form>
              <TextField id="filled-basic" label="add a new task" variant="filled" onChange={this.handleChange} />
              <Button style={{top : 10, left : 30 }} variant="contained" onClick={this.handleClick}>ADD</Button>

                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        {/* <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography> */}
                        <Typography variant="body2" color="text.secondary">
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Done</Button>
                        <Button size="small">Delete</Button>
                    </CardActions>
                </Card>
          </form>
      </div>
        
      );
      
    }
  }

  export default TaskList ;