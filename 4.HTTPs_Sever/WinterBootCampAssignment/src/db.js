import pkg from 'pg';
import dotenv from 'dotenv'


dotenv.config();

const { Client } = pkg;

const pgclient =  new Client ({
    user : process.env.DB_USER,
    host : process.env.DB_HOST,
    database : process.env.DB_DATABASE,
    password : process.env.DB_PASSWORD,
    port : parseInt(process.env.DB_PORT || '5433'),
});

const createTablesQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id                  SERIAL PRIMARY KEY,
        username             TEXT    UNIQUE NOT NULL,
        password            TEXT    NOT NULL         

    );
    CREATE TABLE IF NOT EXISTS workspaces (
        id                  SERIAL PRIMARY KEY,
        name                TEXT    UNIQUE NOT NULL,
        user_id             INTEGER REFERENCES users(id)  ON DELETE CASCADE      

    );
    CREATE TABLE IF NOT EXISTS tasks (
        id                  SERIAL  PRIMARY KEY,
        title               TEXT    NOT NULL,
        description         TEXT,
        completed           BOOLEAN DEFAULT false,
        workspace_id        INTEGER REFERENCES workspaces(id)  ON DELETE CASCADE 
    );
`;

export async function dbConnection (){
    try {
        await pgclient.connect();
        console.log("✅ SUCCESS: Database connected smoothly!");
        await pgclient.query(createTablesQuery);
        console.log("🎉 SUCCESS: All database tables are verified and ready!");


    } catch (error) {
         console.error("❌ ERROR: Database connection failed!", error.message);
    }

}