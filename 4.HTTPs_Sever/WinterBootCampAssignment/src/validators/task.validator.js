import { z } from "zod";

export const createTaskSchema = z.object({
    title : z.string().min(1).max(100),
    description : z.string(),

})
export const updateTaskSchema = z.object({
    completed: z.boolean(),
});