import express from 'express'
import { dbConnection } from './db.js';

import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3001;
const app = express();


app.listen(PORT, async () => {
    console.log(`🚀 Express Server is running on http://localhost:${PORT}`);
    await dbConnection();
})
