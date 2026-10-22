import { z } from "zod";
import { id } from "./commont.validator.js"


export const taskSchema = z.object({
    id,
    title : z.string(),
    description : z.string().nullable(),
    completed : z.boolean(),
    workspace_id : id.nullable(),
})