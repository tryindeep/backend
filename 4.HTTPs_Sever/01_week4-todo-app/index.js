const express = require("express");
const app = express();
app.use(express.json());

let todos = [
  {
    id: 1,
    task: " hit the gym everyday",
    isDone: true
  },
  {
    id: 2,
    task: "hit the gym everyday",
    isDone : false,
  },
];

// Route handlers

// shoe the todo
app.get("/todos", function (req, res) {
  const userTodos = todos.map( (todo) => {
    return {
        number : todo.id,
        task : todo.task,
        isDone : todo.isDone
    }
  })
  res.json({
    message : "your todos",
    todos: userTodos

  });
});

// create a todo
app.post("/create-todo", (req, res ) =>{
    const id = req.body.id;
    const task = req.body.task;
    const isDone = req.body.isDone
    todos.push({
        id : id,
        task : task,
        isDone : isDone
    });
    res.json({
        message : "Your todo added"
    })
});




// edit a todo
app.put("/", function (req, res) {
  res.send("Hello from the put endpoint");
});



// delete a todo
app.delete("/", function (req, res) {
  res.send("Hello from the delete endpoint");
});

app.listen(3000);
