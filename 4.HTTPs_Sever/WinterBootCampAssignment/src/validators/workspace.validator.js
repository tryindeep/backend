import {z} from "zod";
import { id } from "./commont.validator.js"


export const workspaceSchema = z.object({
    id,
    name: z.string().min(5).max(100),
    user_id: id.nullable(),
});