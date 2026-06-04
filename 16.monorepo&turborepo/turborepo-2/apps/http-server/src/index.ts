import express from "express"

const app = express();
app.use(express.json());

app.post("/signup" , (req,res) => {
    
})
app.post("/signin" , (req,res) => {

})

app.listen(5500);
