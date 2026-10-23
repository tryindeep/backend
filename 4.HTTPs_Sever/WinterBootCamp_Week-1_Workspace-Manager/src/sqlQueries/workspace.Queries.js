import { pgclient } from "../db.js";

export const createWorkspace  = async(name , userId) => {
    const result = await pgclient.query(
        "INSERT INTO workspaces (name , user_id) VALUES ($1,$2) RETURNING id",
        [name , userId]
    )
    return result.rows[0];
}

export const getWorkspacesByUser  = async(userId) => {
    const result = await pgclient.query(
        "SELECT id,name FROM workspaces WHERE user_id=$1 ORDER BY id",
        [userId]
    )
    return result.rows;
}

export const deleteWorkspace  = async(workspaceId , userId) => {
    const result = await pgclient.query(
        "DELETE FROM workspaces WHERE id=$1 AND user_id=$2",
        [workspaceId,userId]
    )
    return result.rowCount;
}