import { z } from "zod";


export const signupSchema = z.object({
    username: z.string().min(5).max(100),
    password: z.string().min(5).max(100)
});

export const signinSchema = z.object({
    username : z.string().trim().min(1),
    password : z.string().min(1)
})

