const express = require('express');
const cors    = require('cors');
const app     = express();
const port    = process.env.PORT || 5000;
const db      = require("./db")
// const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'build'))); 

app.get('/allTasks', (req, res) => {
    var getQuery = 'SELECT * FROM todoapp.tasks';
    db.query(getQuery, function (err, result) {
        if (err) console.log("1 record inserted");
        else res.send(result)
        
    })
    // res.send("Hello from server!" );
  })


app.post("/add", (req,res) => {
    // console.log(req.body);
    var addQuery = `INSERT INTO todoapp.tasks (task, completed) VALUES ('${req.body.task}', '${req.body.completed}')`;
    db.query(addQuery, function (err, result) {
        if (err) console.log(err)
        else res.send(result)
    })
    
})

app.delete("/deleteTask/:id", (req, res) => {
    console.log(req.params.id);
    var deleteQuery = `DELETE FROM tasks WHERE taskid = ('${req.params.id}');`;
    db.query(deleteQuery, function (err, result) {
        if (err) console.log(err)
        else res.send(result)
    })
    // res.send(res)
})

app.get("/done/:id", (req, res) => {
    var doneQuery = `SELECT * FROM tasks WHERE taskid = ('${req.params.id}')`;
    db.query(doneQuery, function (err, result) {
        if (err) console.log(err)
        else res.send(result) 
        console.log(result)
    })
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)

})

