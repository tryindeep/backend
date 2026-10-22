import { pgclient } from "../db.js"

export const findUserByUsername = async(username) => {
    const result = await pgclient.query(
        
        "SELECT username FROM users WHERE username=$1",
        [username]
    );

    return result.rows[0] || null;
}

export const createUser = async(username , password) => {
    const result = await pgclient.query(
        "insert into users(username , password) values($1,$2) returning id, username",
        [username , password],
    );

    return result.rows[0];
}