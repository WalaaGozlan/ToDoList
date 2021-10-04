const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
// const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'build'))); 

app.get('/allTasks', (req, res) => {
    res.send("Hello from server!" );
  })
app.post("/add", (req,res) => {
    console.log(req.body);
    res.send("post request ")
})
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

