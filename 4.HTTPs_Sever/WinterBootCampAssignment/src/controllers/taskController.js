import { createTask, deleteTaskById, getAllTaskByWorkspaceId, updateTaskCompleted } from "../sqlQueries/task.Queries.js";
import { createTaskSchema, updateTaskSchema } from "../validators/task.validator.js";

export const taskController = {
    createTask : async (req , res) => {
        try {
            const workspaceId = Number(req.headers.workspaceid);
            if(!Number.isInteger(workspaceId)){
                return res.status(400).json({message : "Invalid WorkspaceId"});
            }
            const parsed = createTaskSchema.safeParse(req.body);

            if (!parsed.success) {
                return res.status(400).json({
                    message: "Incorrect Format",
                    error: parsed.error
                })
            }
            const taskId = await createTask(workspaceId, req.user.id, parsed.data.title, parsed.data.description);
            if(!taskId){
                return res.status(404).json({message : "Worspace not found"});
            }
            return res.status(201).json({ taskId : taskId})
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },
    getAllTask : async(req , res ) => {
        try {
            const workspaceId = Number(req.headers.workspaceid);
            if(!Number.isInteger(workspaceId)){
                return res.status(400).json({message : "Invalid WorkspaceId"});
            }
            const tasks = await getAllTaskByWorkspaceId(workspaceId , req.user.id);
            return res.json({ tasks : tasks})
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },
    updateTask : async (req , res ) => {
        try {
            const taskId = Number(req.params.taskId);
            if(!Number.isInteger(taskId)) {
                return res.status(400).json({ message: "Invalid TaskId" });
            }
            const parsed = updateTaskSchema.safeParse(req.body);
            if(!parsed.success) {
                return res.status(400).json({
                    message: "Incorrect Format",
                    error: parsed.error
                });
            }
            const updatedCount = await updateTaskCompleted(taskId , req.user.id, parsed.data.completed)
            
            if(updatedCount == 0){
                return res.status(404).json({mmessage : "Task not found"})
            }
            return res.json({message : "Task updated"})

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },
    deleteTask : async (req ,res) => {
        try {
            const taskId = Number(req.params.taskId);
            if (!Number.isInteger(taskId)) {
                return res.status(400).json({ message: "Invalid TaskId" });
            }

            const deletedCount = await deleteTaskById(taskId , req.user.id);

            if(deletedCount == 0){
                return res.status(404).json({message : "Task not found"})
            }
            return res.json({message : "Task deleted!"})
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
        

    }
}