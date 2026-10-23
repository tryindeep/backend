const { Router } = require("express");
import { taskController } from "../controllers/taskController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const taskRouter = Router();

taskRouter.use(authMiddleware);

taskRouter.post("/" , taskController.createTask);
taskRouter.get("/",  taskController.getAllTask);
taskRouter.patch("/:taskId" , taskController.updateTask)
taskRouter.delete("/:taskId" , taskController.deleteTask)