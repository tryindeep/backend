const express = require("express");
const app = express();
app.use(express.json());

// log method , timestamp , and the url 

function middleware(req, res, next ){
  const time = new Date();
  console.log(`${req.method} receive from the : ${req.url}  on ${time}`);
  
}

app.get("/add/:a/:b", middleware, (req, res) => {
  const A = Number(req.params.a);
  const B = Number(req.params.b);

  res.send({
    massage: "your addition is :" + (A + B),
  });
});

app.post("/sub", (req, res) => {
  const A = Number(req.body.a);
  const B = Number(req.body.b);

  res.send({
    massage: "your subtraction is :" + (A - B),
  });
});
app.get("/mult", (req, res) => {
  const A = Number(req.query.a);
  const B = Number(req.query.b);

  res.send({
    massage: "your addition is :" + A * B,
  });
});
app.get("/div", (req, res) => {
  const A = Number(req.query.a);
  const B = Number(req.query.b);

  res.send({
    massage: "your addition is :" + A / B,
  });
});

app.listen(3000);
