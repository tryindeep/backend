const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json())

app.use(cors(
// {
    
//     // here you can select the domain 
//     // you want to allow cross platform
//     // domain: ["https://google.com"]

// }

));


app.post("/sum" , (req , res) => {
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)

    res.json({
        answer : a+b
    })
})

app.listen (3001);