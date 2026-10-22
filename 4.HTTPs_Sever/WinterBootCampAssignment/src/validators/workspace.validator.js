import {z} from "zod";



export const workspaceSchema = z.object({
    name: z.string().min(5).max(100),
    user_id: id.nullable(),
});