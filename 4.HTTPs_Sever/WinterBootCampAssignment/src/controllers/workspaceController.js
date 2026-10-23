
import { createWorkspace, deleteWorkspace, getWorkspacesByUser } from "../sqlQueries/workspace.Queries.js";
import { createWorkspaceSchema } from "../validators/workspace.validator.js";

export const workspaceController = {

    createWorkspace : async (req , res) => {
        try {
            const parsed = createWorkspaceSchema.safeParse(req.body);
            if (!parsed.success) {
                return res.status(400).json({
                    message: "Incorrect Format",
                    error: parsed.error
                })
            }
            const workspace = await createWorkspace(parsed.data.name, req.user.id)
            return res.status(201).json({ workspaceId : workspace.id})
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },

    getAllWorkspace :  async(req, res) => {
        try {
            const workspaces = await getWorkspacesByUser(req.user.id);
            return res.json({workspaces : workspaces})
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    },

    deleteWorkspaceById : async(req, res) => {
        try {
            const workspaceId = Number(req.params.workspaceId)
            if(!Number.isInteger(workspaceId)){
                return res.status(400).json({message : "Invalid WorkspaceId"});
            }
            const deletedCount = await deleteWorkspace(workspaceId , req.user.id);
            if(deletedCount === 0){
                return res.status(404).json({ message: "Workspace not found" });
            }

            return res.json({
                message : "Workspace deleted!"
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    }
}