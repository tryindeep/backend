import { pgclient } from "../db.js";


export const createTask = async (workspaceId , userId, title , description) => {
    const result = await pgclient.query(
        `INSERT INTO tasks (title , description, workspace_id)
         SELECT $3::text, $4::text, id
         FROM workspaces
         WHERE id = $1 AND user_id = $2
         RETURNING id
        `,
        [workspaceId , userId, title , description]
    )
    return result.rows[0];
}

export const getAllTaskByWorkspaceId = async (workspaceId , userId) => {
    const result = await pgclient.query(
        `SELECT t.id, t.title , t.description, t.completed, t.workspace_id
         FROM tasks t
         JOIN workspaces w on w.id = t.workspace_id
         WHERE t.workspace_id=$1 AND w.user_id=$2 ORDER BY t.id
        `,
        [workspaceId , userId]
    );
    return result.rows;
}

export const updateTaskCompleted = async (taskId , userId , completed) => {
    const result = await pgclient.query(
        ` UPDATE tasks 
          SET completed = $3
          WHERE id=$1
            AND workspace_id IN (SELECT id FROM workspaces WHERE user_id = $2)
        `,
        [taskId , userId , completed]
    )  
    return result.rowCount; 
}

export const deleteTaskById = async(taskId , userId ) => {
    const result = await pgclient.query(
        `
        DELETE FROM tasks
        WHERE id = $1
            AND workspace_id IN (SELECT id FROM workspaces WHERE user_id = $2)
        `,
        [taskId , userId ]
    );
    return result.rowCount;
}
