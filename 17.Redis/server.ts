import express from "express";
import axios from "axios";
import cors from "cors";
import { createClient } from "redis"

const redisClient = createClient();
await redisClient.connect(); // express -> redis client -> redis server
// Production: createClient({ url: process.env.REDIS_URL })


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const cacheKey = `todos:${id}`;

    // Check Redis first
    const cachedId = await redisClient.get(cacheKey);

    if (cachedId) {
        console.log("✅ Cache Hit");
        return res.json(JSON.parse(cachedId));
    }

    console.log("❌ Cache Miss");

    // Fetch from API
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${id}`
    );

    // Store in Redis for 1 hour
    await redisClient.set(
        cacheKey,
        JSON.stringify(data),
        {
            EX: 3600,
        }
    );

    res.json(data);
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});




            //     Client (Postman/Browser)
            //             │
            //             ▼
            //     Express Server
            //             │
            //     Is data in Redis?
            //      ┌──────────────┐
            //  YES │              │ NO
            //      ▼              ▼
            //  Return Data    Call External API
            //      │              │
            //      │         Store in Redis
            //      │              │
            //      └──────► Return Data