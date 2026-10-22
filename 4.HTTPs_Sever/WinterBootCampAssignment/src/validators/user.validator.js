import { z } from "zod";
import { id } from "./commont.validator.js"


export const userScheam = z.object({
    id,
    username: z.string().min(5).max(100),
    password: z.string().min(5).max(100)
});