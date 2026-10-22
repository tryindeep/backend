import bcryprt from "bcrypt";

import { createUser, findUserByUsername } from "../sqlQueries/auth.Queries.js";
import { signupSchema } from "../validators/user.validator.js";



export const authController =
{
    //signup
    signup: async (req, res) => {
        try {
            // validate input 
            const parsed = signupSchema.safeParse(req.body);
            if (!parsed.success) {
                return res.status(400).json({
                    message: "Incorrect Format",
                    error: parsed.error
                })
            }

            const { username, password } = parsed.data;

            // checking user is exists
            const existingUser = await findUserByUsername(username);
            if (existingUser) {
                return res.status(409).json({
                    message: "User already Exits"
                })
            }

            // hashing password 
            const hashedPassword = await bcryprt.hash(password,10);

            await createUser(username, hashedPassword);

            res.status(201).json({ message: "User Registered SucessFully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Internal Serever Error"
            });
        }
    },

    //signin
    // signin : async (req , res) => {
        
    // }
}

