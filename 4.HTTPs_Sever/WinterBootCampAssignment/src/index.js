import express from 'express'
import { dbConnection } from './db.js';
import { authRouter } from './routes/authRoutes.js';
import { workspaceRouter } from './routes/workspaceRoutes.js';



const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
 


//Routers
app.use("/api/v1/auth" , authRouter);
app.use("/api/v1/" , workspaceRouter);


// Connecting with Db
async function startServer(){
    try {
        app.listen(PORT, async () => {

             await dbConnection();
            console.log(`🚀 Express Server is running on http://localhost:${PORT}`);
           
        })
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

startServer();

