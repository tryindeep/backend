import { prisma } from "./db";
import express from "express"

const app = express();
app.use(express.json());


app.get("/users" , async(req , res) => {
    const users = await prisma.user.findMany();
    res.json({
        users
    })
})


app.get("/todos/:id" , async(req , res) => {
    const id = req.params.id;
    const users = await prisma.user.findFirst({
        where :{
            id: parseInt(id)
        },
        select : {
            todos: true,
            username: true
        }
    });
    res.json({
        users
    })
})


app.listen(3000);
