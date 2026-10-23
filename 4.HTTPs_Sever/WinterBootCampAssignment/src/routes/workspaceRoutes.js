import { Router } from "express";
import { workspaceController } from "../controllers/workspaceController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const workspaceRouter = Router();

workspaceRouter.use(authMiddleware)

workspaceRouter.post("/workspace/create" , workspaceController.createWorkspace)
workspaceRouter.get("/workspaces" , workspaceController.getAllWorkspace)
workspaceRouter.delete("/workspaces/:workspaceId" , workspaceController.deleteWorkspaceById)