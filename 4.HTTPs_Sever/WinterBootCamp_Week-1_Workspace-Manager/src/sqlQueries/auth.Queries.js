import { pgclient } from "../db.js"

export const findUserByUsername = async(username) => {
    const result = await pgclient.query(
        
        "SELECT id,username, password FROM users WHERE username=$1",
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

export const findUserById = async (id) => {
    const result = await pgclient.query(
        "SELECT id,username FROM users where id=$1",
        [id]
    );

    return result.rows[0] || null;
}